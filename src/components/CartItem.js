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
            <div className="row offset-md-2">
                <div className="col-md-2">
                    <img src={props.img} style={{width:"100%"}} alt=".." />
                </div>
                <div className="col-2 align-self-center">
                    {props.name}
                </div>
                <div className="col-1 align-self-center">
                    {props.price}
                </div>
                <div className="col-1 align-self-center btn-group">
                    <button onClick={ReduceItem} className="me-1 btn btn-light">-</button>
                    <div className="align-self-center">
                        {props.amount}
                    </div>
                    <button onClick={AddItem} className="ms-1 btn btn-light" >+</button>
                </div>
                <div className="col-1 align-self-center">
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