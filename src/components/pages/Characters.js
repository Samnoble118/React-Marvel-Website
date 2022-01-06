import React from 'react';
import '../../App.css';
import MovieCharacters from '../MovieCharacters';
import Footer from '../Footer';

export default function Characters() {
    return (
    <div>
        <div className="characters">
            <h1>CHARACTERS</h1>
        </div>
    
    <MovieCharacters />
    <Footer />
    </div>
    )
}