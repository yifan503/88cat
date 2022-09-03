import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'
import logo from '../common/images/logo_happy.svg'
import {LoginUser} from './Cookie'
import { useCookies } from 'react-cookie'

function Heading (){
    const [cookies, setCookie] = useCookies(['shoppingCart']);
    let CartList = cookies.shoppingCart;
    let IsEmpty = true;
    if (CartList.length>0){
        IsEmpty = false;
    }
    return(
        <div className="container">
            <div className="row d-none d-md-flex">
                <div className="col-md-2 pt-5">
                    <div className="input-group">
                        <div className="input-group-text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                        </div>
                        <input type="search" className="form-control main-text" placeholder="search.." />
                    </div>                    
                </div>
                <div className="col-md-2 offset-md-3 text-center">
                    <img src={logo} style={{width:"150px"}} alt="logo"/>
                </div>
                <div className="col-md-1 offset-md-3 pt-5 ps-5">
                    {
                        !LoginUser() ? 
                        <Link to="/Login" className="text-dark"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                            </svg></Link> 
                        : <Link to="/Profile" className="text-dark" ><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                      </svg></Link>
                    }
                </div>
                <div className="col-md-1 pt-5">
                <Link to="/ShoppingCart" className="text-dark position-relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>
                    {IsEmpty?
                    <div></div>
                    :
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
                            {
                                CartList.length
                            }
                        </span>
                    }
                </Link>
                </div>
            </div>
            <div className="row mb-4">
                <Navbar />
            </div>
            
        </div>
    );
}

export default Heading;