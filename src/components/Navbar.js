import React from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";

function Navbar() {


    function navBurger () {
        const navItems = document.getElementsByClassName('nav-items')[0]

        navItems.classList.toggle('active')
    }


    return (
        <div className="nav-container">

            <nav className="navbar">
                <div className="nav-logo">
                   <a href="/React-Marvel-Website">MARVEL <i class="fas fa-mask"></i></a>
                </div>

                <div className="burger" onClick={navBurger}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>

                <div className="nav-items">
                    <ul>
                        <Link className="li-link" to="/React-Marvel-Website">Home</Link>
                        <Link className="li-link" to="/Movies">Movies</Link>
                        <Link className="li-link" to="/Characters">Characters</Link>
                        <Link className="li-link" to="/Items">Items</Link>
                    </ul>
                </div>
            </nav>




            
        </div>
    )
}

export default Navbar
