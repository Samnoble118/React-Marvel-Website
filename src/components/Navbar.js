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
                    MARVEL <i class="fas fa-mask"></i>
                </div>

                <div className="burger" onClick={navBurger}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>

                <div className="nav-items">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Movies</a></li>
                        <li><a href="#">Characters</a></li>
                    </ul>
                </div>
            </nav>




            
        </div>
    )
}

export default Navbar
