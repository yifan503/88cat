import React from 'react'
import { useCookies } from 'react-cookie';

function Product (props){
    const [cookies, setCookie] = useCookies(['shoppingCart']);
    if (!Array.isArray(cookies.shoppingCart)){
        setCookie('shoppingCart',[],{path:'/'})
    };
    const AddToCart = ()=>{
        let productInfo = {
            id:props.id,
            img:props.img,
            name:props.name,
            price:props.price,
            amount:1
        };
        let newProductList = cookies.shoppingCart;
        //判断购物车中是否有相同物品
        let repeat = false;
        for(let i=0;i<newProductList.length;i++){
            if(newProductList[i].id==productInfo.id){
                newProductList[i].amount+=1;
                repeat = true;
                break;
            }
        }
        if(!repeat){
            newProductList.push(productInfo);
        }
        setCookie('shoppingCart',newProductList,{path:'/'});
        console.log(cookies.shoppingCart)
    }

    return (
        <div className="container col-md-3">
            <div className="row mb-3 ">
                <img src={props.img} alt=".." />
            </div>
            <div className="row text-center mb-3">
                <span className="main-text">{props.name}</span>
            </div>
            <div className="row text-center mb-3">
                <strong className="main-text">{props.price}</strong>
            </div>
            <div className="row mb-2 mx-5 mx-md-0">
                <button type="button" 
                className="btn btn-add-to-cart main-text"
                onClick={AddToCart}
                >add to cart</button>
            </div>
        </div>
    );
}

export default Product;