import React from "react"
import logo_angry from '../common/images/logo_angry.svg'

function NotFound (){
    return(
        <div className="container">
            <div className="text-center">
                <img src={logo_angry} alt=".." />
            </div>
            <h1 className="title-text text-center">404 Not Found</h1>
        </div>
    );
}

export default NotFound;