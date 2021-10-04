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
import CaptainAmerica3 from '../Images/Civil-War.jpeg';
import SpiderMan1 from '../Images/Spider-Man-Homecoming.jpeg';
import BlackPanther from '../Images/Black-Panther.jpeg';
import GotG2 from '../Images/Guardians-Of-The-Galaxy-Vol2.jpeg';
import DoctorStrange from '../Images/Doctor-Strange.jpeg';
import Thor3 from '../Images/Thor-Ragnarok.jpeg';
import AvengersIF from '../Images/Infinity-War.jpeg';
import AntMan2 from '../Images/Ant-Man-The-Wasp.jpeg';
import CaptainMarvel from '../Images/Captain-Marvel.jpg';
import AvengersEG from '../Images/Endgame.jpeg';
import SpiderMan2 from '../Images/Far-From-Home.jpeg';


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
            <h1>Phase Three</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardsItem 
                        src={CaptainAmerica3}
                        text="Captain America: Civil War"
                        label="Captain America"
                        path='/characters'
                        />
                         <CardsItem 
                        src={SpiderMan1}
                        text="Spider-Man: Homecoming"
                        label="Spider-Man"
                        path='/characters'
                        />
                        <CardsItem 
                        src={BlackPanther}
                        text="Black Panther"
                        label="Black Panther"
                        path='/characters'
                        />
                        </ul>
                        <ul className="cards__items">
                        <CardsItem 
                        src={GotG2}
                        text="Guardians Of The Galaxy Vol.2"
                        label="Guardians Of The Galaxy"
                        path='/characters'
                        />
                        <CardsItem 
                        src={DoctorStrange}
                        text="Doctor Strange"
                        label="Doctor Strange"
                        path='/characters'
                        />
                        <CardsItem 
                        src={Thor3}
                        text="Thor: Ragnorok"
                        label="Thor"
                        path='/characters'
                        />
                        </ul>
                        <ul className="cards__items">
                         <CardsItem 
                        src={AvengersIF}
                        text="Avengers: Infinity war"
                        label="Avengers"
                        path='/characters'
                        />
                         <CardsItem 
                        src={AntMan2}
                        text="Ant Man And The Wasp"
                        label="Ant Man"
                        path='/characters'
                        />
                         <CardsItem 
                        src={CaptainMarvel}
                        text="Captain Marvel"
                        label="Captain Marvel"
                        path='/characters'
                        />
                        </ul>
                        <ul className="cards__items">
                         <CardsItem 
                        src={AvengersEG}
                        text="Avengers: Endgame"
                        label="Avengers"
                        path='/characters'
                        />
                         <CardsItem 
                        src={SpiderMan2}
                        text="Spider-Man: Far From Home"
                        label="Spider-Man"
                        path='/characters'
                        />
                    </ul>
                    
                </div>
            </div>
        </div>
    )
}

export default Cards
