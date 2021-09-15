import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure newsletter for all the mavel updates.
                </p>
                <p className="footer-subscription-text">You can unsubscribe at anytime
                </p>
                <div className="input-areas">
                    <form>
                <input type="email" name="email" placeholder="Your Email" className="footer-input"/>
                <Button buttonStyle='btn-outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                    <h2>About Us</h2>
                    <Link to='/subscribe'>How it works</Link>
                    <Link to='/'>Hello</Link>
                    <Link to='/'>Yellow</Link>
                    <Link to='/'>Pidgy</Link>
                    <Link to='/'>Poo</Link>
                    </div>
                    <div className="footer-link-items">
                    <h2>About Us</h2>
                    <Link to='/subscribe'>How it works</Link>
                    <Link to='/'>Hello</Link>
                    <Link to='/'>Yellow</Link>
                    <Link to='/'>Pidgy</Link>
                    <Link to='/'>Poo</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                    <h2>About Us</h2>
                    <Link to='/subscribe'>How it works</Link>
                    <Link to='/'>Hello</Link>
                    <Link to='/'>Yellow</Link>
                    <Link to='/'>Pidgy</Link>
                    <Link to='/'>Poo</Link>
                    </div>
                    <div className="footer-link-items">
                    <h2>About Us</h2>
                    <Link to='/subscribe'>How it works</Link>
                    <Link to='/'>Hello</Link>
                    <Link to='/'>Yellow</Link>
                    <Link to='/'>Pidgy</Link>
                    <Link to='/'>Poo</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="socail-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            MARVEL <i class="fas fa-mask"></i>
                        </Link>
                    </div>
                    <small class='website-rights'>Marvel © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
        </div>
    )
}

export default Footer
