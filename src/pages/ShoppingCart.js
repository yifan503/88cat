import React from 'react'
import CartItem from '../components/CartItem'
import {useNavigate} from 'react-router-dom'
import { useCookies } from 'react-cookie'

function ShoppingCart(){
    //从cookies读取购物车数组
    const [cookies, setCookie] = useCookies(['shoppingCart']);
    const CartList = cookies.shoppingCart;
    const navigate = useNavigate();

    let IsEmpty = true;
    if(CartList.length>0){
        IsEmpty = false
    }

    const goToCheckOut = () => {
        navigate('/CheckOut');
    }

    return (
        <div className="container-fluid">
            <h1 className="title-text text-center mt-3 mb-3">ShoppingCart</h1>
            {/* 循环插入cartitem */}
            {
                IsEmpty ?
                <div className="main-text text-center">
                    your cart is empty
                </div>
                :
                CartList.map(item=>
                    <CartItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        img={item.img}
                        price={item.price}
                        amount={item.amount}
                    />
                )
            }
            {/* 跳转结账界面 */}
            {
                IsEmpty?
                <div></div>
                :
                <div className="main-text text-center mt-5">
                    <button onClick={goToCheckOut} className="col-3 btn btn-outline-secondary">Go to check out</button>
                </div>
            }
            
        </div>
    );
}

export default ShoppingCart;