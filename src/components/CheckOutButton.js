import { useEffect } from "react";
import {
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import {useNavigate,Link} from 'react-router-dom';
import axios from 'axios';
import {API} from '../components/API';
import {LoginUser} from './Cookie';
import { Cookies, useCookies} from 'react-cookie'


// This values are the props in the UI
// const amount = "1.99";
const style = {
  "layout":"vertical",
  "shape":"pill",
  "color":"white"
};

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner, amount, purchase_list}) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
    const [cookies, setCookie, removeCookie] = useCookies(['shoppingCart']);
    let navigate = useNavigate();
    let currentUser = LoginUser();

    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: currency,
            },
        });
    }, [currency, showSpinner]);


    return (<>
            { (showSpinner && isPending) && <div className="spinner" /> }
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[amount, currency, style]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: [
                                {
                                    description: "88fly cat goods",
                                    amount: {
                                        currency_code: currency,
                                        value: amount,
                                    },
                                },
                            ],
                        })
                        .then((orderId) => {
                            // Your code here after create the order
                            console.log("order id: "+orderId);
                            return orderId;
                        });
                }}
                onApprove={function (data, actions) {
                    return actions.order.capture().then(function (details) {
                        // Your code here after capture the order
                        // 获取订单信息，像后端发送请求储存订单
                        console.log(details);
                        console.log(details.payer.email_address)
                        console.log(details.payer.name.given_name + " " + details.payer.name.surname)
                        console.log(details.update_time)
                        console.log(details.id)
                        console.log(amount)
                        console.log(purchase_list)
                        let data = new FormData();
                        data.append('order_id',details.id);
                        data.append('username',currentUser); // 从cookie获取用户名
                        data.append('payee',details.payer.name.given_name + " " + details.payer.name.surname);
                        data.append('order_time',details.update_time);
                        data.append('payment_amount',amount);
                        data.append('purchase_units',JSON.stringify(purchase_list));
                        axios.post(API+'/createOrder',data).then((res)=>{
                            if(res.data == "success"){
                                // 清空购物车
                                setCookie('shoppingCart',[],{path:'/'});
                                // 跳转到成功页面
                                navigate('/PaymentSuccess');
                            }
                            else{
                                alert("fail")
                            }
                        }).catch((err)=>{
                        console.log(err) 
                        });
                                              
                    });
                }}
            />
        </>
    );
}

export default ButtonWrapper;