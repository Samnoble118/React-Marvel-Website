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
                        src="images/Thor.jpeg"
                        text="Thor"
                        label="Thor"
                        path='/characters'
                        />
                        <CardsItem 
                        src="images/The-First-Avenger.jpeg"
                        text="Captain America The First Avenger"
                        label="Captain America"
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
            <h1>Phase Two</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardsItem 
                        src="images/Iron-Man-3.jpeg"
                        text="Iron Man 3"
                        label="Iron Man"
                        path='/characters'
                        />
                         <CardsItem 
                        src="images/Thor-The-Dark-World.jpeg"
                        text="Thor The Dark Wold"
                        label="Thor"
                        path='/characters'
                        />
                        <CardsItem 
                        src="images/The-Winter-Solider.jpeg"
                        text="Captain America The Winter Solider"
                        label="Captain America"
                        path='/characters'
                        />
                        </ul>
                        <ul className="cards__items">
                        <CardsItem 
                        src="images/Guardians-Of-The-Galaxy.jpeg"
                        text="Guardians Of The Galaxy"
                        label="Guardians Of The Galaxy"
                        path='/characters'
                        />
                        <CardsItem 
                        src="images/Age-Of-Ultron.jpeg"
                        text="Avengers Age Of Ultron"
                        label="Avengers"
                        path='/characters'
                        />
                        <CardsItem 
                        src="images/Ant-Man.jpeg"
                        text="Ant Man"
                        label="Ant Man"
                        path='/characters'
                        />
                    </ul>
                    
                </div>
            </div>
        </div>
    )
}

export default Cards
