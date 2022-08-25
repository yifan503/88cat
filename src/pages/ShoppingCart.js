import React from 'react'
import CartItem from '../components/CartItem'
import { useCookies } from 'react-cookie'

function ShoppingCart(){
    //从cookies读取购物车数组
    const [cookies, setCookie] = useCookies(['shoppingCart']);
    const CartList = cookies.shoppingCart;
    let IsEmpty = true;
    if(CartList.length>0){
        IsEmpty = false
    }

    return (
        <div className="container">
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
        </div>
    );
}

export default ShoppingCart;