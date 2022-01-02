import React from 'react';
import '../../App.css';
import MovieCharacters from '../MovieCharacters';
import Footer from '../Footer';

export default function Characters() {
    return (
    <>
    <h1 className='characters'>CHARACTERS</h1>
    <MovieCharacters />
    <Footer />
    </>
    )
}