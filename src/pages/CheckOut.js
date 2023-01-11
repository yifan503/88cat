import React from 'react'
import { useCookies } from 'react-cookie'
import '../common/style/hr.css'
import ButtonWrapper from '../components/CheckOutButton'


function CheckOut(){
    // 从cookie读取购物车
    const [cookies, setCookie] = useCookies(['shoppingCart']);
    const CartList = cookies.shoppingCart;
    const purchase_list = [];
    let totalPrice = 0;
    for(let i = 0; i < CartList.length; i++){
        // 计算总价
        totalPrice += CartList[i].price * CartList[i].amount;
        // 创建订单列表
        let tempObj = {
            description: CartList[i].name,
            amount: CartList[i].amount,
            price: {
                currency_code: "GBP",
                value: CartList[i].price,
            },
        };
        purchase_list.push(tempObj);
    }
    totalPrice = (totalPrice).toFixed(2) // 取整


    return(
        <div className="container">
            <div className="col-md-6 offset-md-3">
                <h1 className="title-text text-center">Your Bill</h1>
                <div className="row mt-4">
                    <div className="col-2 main-text">QTY</div>
                    <div className="col-8 main-text">ITEM</div>
                    <div className="col-2 main-text">AMT</div>
                </div>
                
                <hr className="hr-dashed-fixed" />

                {/* 展示要购买的商品 */}
                {
                    CartList.map(item=><div className="row mt-1">
                        <div className="col-2 main-text">
                            {item.amount}
                        </div>
                        <div className="col-8 main-text">
                            {item.name}
                        </div>
                        <div className="col-2 main-text">
                            {parseFloat(item.price)*item.amount }
                        </div>
                        
                        
                    </div>)

                }
                {/* 总价 */}
                <hr className="hr-dashed-fixed" />
                <div className="row">
                    <h3 className="title-text col-4">Total</h3>
                    <span className="main-text col-2 offset-6">{totalPrice}</span>
                </div>
                
                {/* 结账按钮 */}
                <div className="mt-5 col-8 offset-2">
                    <ButtonWrapper 
                        currency={"GBP"}
                        showSpinner={false}
                        amount = {totalPrice}
                        purchase_list = {purchase_list}
                    />
                </div>
            </div>
            
        </div>
    )
}

export default CheckOut;