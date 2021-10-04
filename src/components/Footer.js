import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    The Marvel Ciniamatic Universe
                </p>
                <p className="footer-subscription-text">Watch the movies in timeline order:
                </p>
                <div className="input-areas">
                   
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                    <h2>Phase One</h2>
                    <Link to='/subscribe'>Iron Man</Link>
                    <Link to='/'>The Incredible Hulk</Link>
                    <Link to='/'>Iron Man 2</Link>
                    <Link to='/'>Thor</Link>
                    <Link to='/'>Captain America: The First Avenger</Link>
                    <Link to='/'>Avengers Assemble</Link>
                    </div>
                    <div className="footer-link-items">
                    <h2>Phase Two</h2>
                    <Link to='/subscribe'>Iron Man 3</Link>
                    <Link to='/'>Thor: The Dark World</Link>
                    <Link to='/'>Captain America: The Winter Soilder</Link>
                    <Link to='/'>Guardians Of The Galaxy</Link>
                    <Link to='/'>Avengers Age Of Ultron</Link>
                    <Link to='/'>Ant Man</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                    <h2>Phase Three</h2>
                    <Link to='/subscribe'>Captain America: Civil War</Link>
                    <Link to='/'>Spider-Man: Homecoming</Link>
                    <Link to='/'>Black Panther</Link>
                    <Link to='/'>Guardians Of The Galaxy Vol.2</Link>
                    <Link to='/'>Doctor Strange</Link>
                    <Link to='/'>Thor: Ragnorok</Link>
                    <Link to='/'>Avengers: Infinity War</Link>
                    <Link to='/'>Ant Man And The Wasp</Link>
                    <Link to='/'>Captain Marvel</Link>
                    <Link to='/'>Avengers: Endgame</Link>
                    <Link to='/'>Spider-Man: Far From Home</Link>
                    </div>
                    <div className="footer-link-items">
                    <h2>Phase Four</h2>
                    <Link to='/subscribe'>Black Widow</Link>
                    <Link to='/'>WandaVision</Link>
                    <Link to='/'>The Falcon And The Winter Solider</Link>
                    <Link to='/'>Loki</Link>
                    <Link to='/'>Shang Chi And The Ledgend Of The Ten Rings</Link>
                    <Link to='/'>The Eternals</Link>
                    <Link to='/'>Hawkeye</Link>
                    <Link to='/'>Spider-Man: No Way Home</Link>
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
