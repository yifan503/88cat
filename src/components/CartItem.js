import React from 'react'
import {useCookies} from 'react-cookie'

function CartItem(props){
    const [cookies, setCookie] = useCookies(['shoppingCart']);

    const AddItem = () => {
        let newProductList = cookies.shoppingCart;
        for(let i=0;i<newProductList.length;i++){
            if(newProductList[i].id==props.id){
                newProductList[i].amount+=1;
                break;
            }
        }
        setCookie('shoppingCart',newProductList,{path:'/'});
    }

    const ReduceItem = () => {
        let newProductList = cookies.shoppingCart;
        for(let i=0;i<newProductList.length;i++){
            if(newProductList[i].id==props.id){
                newProductList[i].amount==1 ?
                newProductList.splice(i,1)
                :
                newProductList[i].amount-=1;
                break;
            }
        }
        setCookie('shoppingCart',newProductList,{path:'/'});
    }

    const RemoveItem = () => {
        //在购物车删除对应ID商品
        let newProductList = cookies.shoppingCart;
        for(let i=0;i<newProductList.length;i++){
            if(newProductList[i].id==props.id){
                newProductList.splice(i,1);
                break;
            }
        }
        setCookie('shoppingCart',newProductList,{path:'/'});
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-2">
                    <img src={props.img} style={{width:"100%"}} alt=".." />
                </div>
                <div className="col-2">
                    {props.name}
                </div>
                <div className="col-1">
                    {props.price}
                </div>
                <div className="col-1">
                    <button onClick={ReduceItem} className="me-1">-</button>
                    {props.amount}
                    <button onClick={AddItem} className="ms-1" >+</button>
                </div>
                <div className="col-1">
                    <button 
                    className="btn btn-outline-danger"
                    onClick={RemoveItem}
                    >remove</button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;