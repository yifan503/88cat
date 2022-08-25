import React from 'react'
import {Link} from 'react-router-dom'
import {LoginUser} from './Cookie'


function Navbar (){
    return(
        <div className="main-text">
            <nav className="navbar navbar-expand-md navbar-light justify-content-center">
                <div className="w-100 row">
                    <button className="navbar-toggler col-2" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#navbarSupportedContent" 
                            aria-controls="navbarSupportedContent" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <form className="d-flex d-md-none col-7">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                    </form>
                    <div className="d-flex d-md-none col-1 pt-1">
                        {
                        !LoginUser() ? 
                        <Link to="/Login" className="text-dark"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                            </svg></Link> 
                        : <Link to="/Profile" className="text-dark" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                      </svg></Link>
                        }
                    </div>
                    <div className="d-flex d-md-none col-1 pt-1">
                        <Link to="/ShoppingCart" className="text-dark"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </svg></Link>
                    </div>
                    <ul className="navbar-nav 
                                    me-auto 
                                    mb-2 
                                    mb-lg-0 
                                    justify-content-center
                                    collapse 
                                    navbar-collapse
                                    "
                        id="navbarSupportedContent">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/CatsTreats">Cats' treats</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/CatsToys">Cats' toys</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/CatsCare">Cats' care</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/AllProducts">All</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About">Sale</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;