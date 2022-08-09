import React from 'react'

function Product (props){
    return (
        <div className="container col-md-3">
            <div className="row">
                <img src={props.img} alt=".." />
            </div>
            <div className="row text-center mb-1">
                <strong>{props.name}</strong>
            </div>
            <div className="row text-center mb-1">
                <strong>{props.price}</strong>
            </div>
            <div className="row mb-1">
                <button type="button" className="btn btn-outline-warning">add to cart</button>
            </div>
        </div>
    );
}

export default Product;