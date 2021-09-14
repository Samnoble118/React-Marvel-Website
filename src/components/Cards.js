import React from 'react'
import CardsItem from './CardsItem'
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Phase One</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardsItem 
                        src="images/Iron-Man-2.jpeg"
                        text="Iron Man"
                        label="Iron Man"
                        path='/characters'
                        />
                         <CardsItem 
                        src="images/The-Incredible-Hulk.jpeg"
                        text="The Incredible Hulk"
                        label="Hulk"
                        path='/characters'
                        />
                        <CardsItem 
                        src="images/Iron-Man-2-Movie.jpeg"
                        text="Iron Man 2"
                        label="Iron Man"
                        path='/characters'
                        />
                        </ul>
                        <ul className="cards__items">
                        <CardsItem 
                        src="images/The-First-Avenger.jpeg"
                        text="Captain America The First Avenger"
                        label="Captain America"
                        path='/characters'
                        />
                        <CardsItem 
                        src="images/Thor.jpeg"
                        text="Thor"
                        label="Thor"
                        path='/characters'
                        />
                        <CardsItem 
                        src="images/Avengers-Assemble.jpeg"
                        text="Avengers Assemble"
                        label="Avengers"
                        path='/characters'
                        />
                    </ul>
                    
                </div>
            </div>
        </div>
    )
}

export default Cards
