import React from 'react'
import logo_angry from '../common/images/logo_angry.svg'
import Product from './Product'

function PopularProducts (){
    const products = [
        {
            img:logo_angry,
            name:"kitty favourite meat ball",
            price:"1.99",
            id:"1"
        },
        {
            img:logo_angry,
            name:"cat cat stick",
            price:"2.99",
            id:"2"
        },
        {
            img:logo_angry,
            name:"chic kitty jacket",
            price:"100",
            id:"3"
        }
    ]
    return (
        <div className="row offset-md-1">
            {products.map(
                product => 
                    <Product 
                    key = {product.id}
                    id={product.id} 
                    img={product.img} 
                    name={product.name} 
                    price={product.price} 
                    /> 
            )}
        </div>
    );
}

export default PopularProducts;