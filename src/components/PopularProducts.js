import React from 'react'
import logo_angry from '../common/images/logo_angry.svg'

function PopularProducts (){
    return (
        <div className="row">
            <div className="col-md-3 offset-md-1">
                <img src={logo_angry} alt="pic"/>
            </div>
            <div className="col-md-3">
                <img src={logo_angry} alt="pic"/>
            </div>
            <div className="col-md-3">
                <img src={logo_angry} alt="pic"/>
            </div>
        </div>
    );
}

export default PopularProducts;