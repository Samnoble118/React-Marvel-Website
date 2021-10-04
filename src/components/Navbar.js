import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
      }, []);

    window.addEventListener('resize', showButton);
    

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/React-Marvel-Website" className="navbar-logo" onClick={closeMobileMenu}>
                    MARVEL <i class="fas fa-mask"></i>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item' onClick={closeMobileMenu}><Link to='/React-Marvel-Website' className="nav-links">
                        Home
                        </Link>
                    </li>
                    <li className='nav-item' onClick={closeMobileMenu}><Link to='/Movies' className="nav-links">
                        Movies
                        </Link>
                    </li>
                    <li className='nav-item' onClick={closeMobileMenu}><Link to='/Characters' className="nav-links">
                        Characters
                        </Link>
                    </li>
                    <li className='nav-item' onClick={closeMobileMenu}><Link to='/Items' className="nav-links">
                        Items
                        </Link>
                    </li>
                    <li className='nav-item' onClick={closeMobileMenu}><Link to='/Subscribe' className="nav-links-mobile">
                        Trailers
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>TRAILERS</Button>}
            </div>
        </nav>
        </>
    )
}

export default Navbar
