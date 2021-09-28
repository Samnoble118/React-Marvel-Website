import React from 'react';
import CardsItem from './CardsItem';
import './Cards.css';
import MarvelMovies from '../Images/Marvel-Movies.jpeg';
import MarvelCharacters from '../Images/Marvel-Characters.jpeg';
import MarvelItems from '../Images/Infinity-Stones.jpeg';

function CardsHome () {
    return (
       <div className="cards">
           <h1>Where do you want to explore?</h1>
           <div className="cards__container">
               <div className="cards__wrapper">
                   <ul className="cards__items">
                   <CardsItem 
                        src={MarvelMovies}
                        text="Explore all the movies in the MCU"
                        label="Movies"
                        path='/movies'
                        />
                         <CardsItem 
                        src={MarvelCharacters}
                        text="Explore all of the MCU Superheroes"
                        label="Heroes"
                        path='/characters'
                        />
                   <CardsItem 
                        src={MarvelItems}
                        text="Explore all the weapons, ships and powerful objects in the MCU"
                        label="Objestcs"
                        path='/items'
                        />
                   </ul>

               </div>
           </div>
       </div>
    )
}


export default CardsHome