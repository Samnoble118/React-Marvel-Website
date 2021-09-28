import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Video from '../Images/video-2.mp4';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src={Video} autoPlay loop muted />
            <h1>MARVEL CINEMATIC UNIVERSE</h1>
            <p>Avegers Assemble!</p>
            <br /><br />
            <div className="hero-btns">
                <Button 
                className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    GET STARTED
                    </Button>
                    <Button 
                className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    WATCH TRAILER <i className='far fa-play-circe' />
                    </Button>
            </div>
        </div>
    )
}

export default HeroSection
