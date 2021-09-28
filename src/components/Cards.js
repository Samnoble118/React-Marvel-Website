import React from 'react'
import CardsItem from './CardsItem'
import './Cards.css';
import IronMan from '../Images/Iron-Man-2.jpeg';
import Hulk from '../Images/The-Incredible-Hulk.jpeg';
import IronMan2 from '../Images/Iron-Man-2-Movie.jpeg';
import Thor from '../Images/Thor.jpeg';
import CaptainAmerica1 from '../Images/The-First-Avenger.jpeg';
import AvengersAssemble from '../Images/Avengers-Assemble.jpeg';
import IronMan3 from '../Images/Iron-Man-3.jpeg';
import Thor2 from '../Images/Thor-The-Dark-World.jpeg';
import CaptainAmerica2 from '../Images/The-Winter-Solider.jpeg';
import GotG from '../Images/Guardians-Of-The-Galaxy.jpeg';
import AvengersAoU from '../Images/Age-Of-Ultron.jpeg';
import AntMan1 from '../Images/Ant-Man.jpeg';


function Cards() {
    return (
        <div className='cards'>
            <h1>Phase One</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardsItem 
                        src={IronMan}
                        text="Iron Man"
                        label="Iron Man"
                        path='/characters'
                        />
                         <CardsItem 
                        src={Hulk}
                        text="The Incredible Hulk"
                        label="Hulk"
                        path='/characters'
                        />
                        <CardsItem 
                        src={IronMan2}
                        text="Iron Man 2"
                        label="Iron Man"
                        path='/characters'
                        />
                        </ul>
                        <ul className="cards__items">
                        <CardsItem 
                        src={Thor}
                        text="Thor"
                        label="Thor"
                        path='/characters'
                        />
                        <CardsItem 
                        src={CaptainAmerica1}
                        text="Captain America The First Avenger"
                        label="Captain America"
                        path='/characters'
                        />
                        <CardsItem 
                        src={AvengersAssemble}
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
                        src={IronMan3}
                        text="Iron Man 3"
                        label="Iron Man"
                        path='/characters'
                        />
                         <CardsItem 
                        src={Thor2}
                        text="Thor The Dark Wold"
                        label="Thor"
                        path='/characters'
                        />
                        <CardsItem 
                        src={CaptainAmerica2}
                        text="Captain America The Winter Solider"
                        label="Captain America"
                        path='/characters'
                        />
                        </ul>
                        <ul className="cards__items">
                        <CardsItem 
                        src={GotG}
                        text="Guardians Of The Galaxy"
                        label="Guardians Of The Galaxy"
                        path='/characters'
                        />
                        <CardsItem 
                        src={AvengersAoU}
                        text="Avengers Age Of Ultron"
                        label="Avengers"
                        path='/characters'
                        />
                        <CardsItem 
                        src={AntMan1}
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
