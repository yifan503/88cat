import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'
import logo from '../common/images/logo_happy.svg'

function Heading (){
    return(
        <div className="container">
            <div className="row d-none d-sm-flex">
                <div className="col-md-2 pt-4">
                    <div className="input-group">
                        <div className="input-group-text">
                            @
                        </div>
                        <input type="search" className="form-control" placeholder="search.." />
                    </div>                    
                </div>
                <div className="col-md-2 offset-md-3">
                    <img src={logo} style={{width:"150px"}} alt="logo"/>
                </div>
                <div className="col-md-1 offset-md-3 pt-4">
                    <Link to="/Profile">Profile</Link>
                </div>
                <div className="col-md-1 pt-4">
                    shopping cart
                </div>
            </div>
            <div className="row mb-4">
                <Navbar />
            </div>
            
        </div>
    );
}

export default Heading;