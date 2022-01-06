import React from 'react';
import './Navbar.css';

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
                        <li><a href="/React-Marvel-Website">Home</a></li>
                        <li><a href="/Movies">Movies</a></li>
                        <li><a href="/Characters">Characters</a></li>
                        <li><a href="/Items">Items</a></li>
                    </ul>
                </div>
            </nav>




            
        </div>
    )
}

export default Navbar
