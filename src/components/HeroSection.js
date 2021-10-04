import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Video from '../Images/video-2.mp4';
import { Link } from 'react-router-dom';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src={Video} autoPlay loop muted />
            <h1>MARVEL CINEMATIC UNIVERSE</h1>
            <p>Avegers Assemble!</p>
            <br /><br />
            <div className="hero-btns">
                
                    <a className="button" href="#getStarted">GET STARTED</a>
                
                
                
            </div>
        </div>
    )
}

export default HeroSection
