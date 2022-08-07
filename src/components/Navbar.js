import React from 'react'
import {Link} from 'react-router-dom'
import '../common/style/Navbar.css'


function Navbar (){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
                <div>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About">About</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Cats' food
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item">1</a>
                                </li>
                                <li>
                                    <a className="dropdown-item">2</a>
                                </li>
                                <li><hr className="dropdown-divider" /></li>
                                <li>
                                    <a className="dropdown-item">3</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Cats' toys
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item">1</a>
                                </li>
                                <li>
                                    <a className="dropdown-item">2</a>
                                </li>
                                <li><hr className="dropdown-divider" /></li>
                                <li>
                                    <a className="dropdown-item">3</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Brands
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item">1</a>
                                </li>
                                <li>
                                    <a className="dropdown-item">2</a>
                                </li>
                                <li><hr className="dropdown-divider" /></li>
                                <li>
                                    <a className="dropdown-item">3</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;