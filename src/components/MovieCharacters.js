import React from 'react';
import './MovieCharacters.css';
import CharcsItem from './CardsItem';
import IronMan from '../Images/Iron-Man-2.jpeg';



function movieCharacters() {
    return (
        <div className="movieChars">
         <h1>Iron Man</h1>
             <div className="chars__container">
                <div className="chars__wrapper">
                    <ul className="chars__items">
                        <h3>Tony Stark</h3>
                        <p>blah blah blah</p>
                        <img src="" alt="Tony Stark" />
                        <h3>Pepper Potts</h3>
                        <p>blah blah blah</p>
                        <img src="" alt="Pepper Potts" />
                        <CharcsItem
                        src={IronMan}
                        text="Iron Man"
                        label="Iron Man"
                        path='/characters'
                        />

                        
                    </ul>
                    
                </div>
            </div>

        </div>
    )
}

export default movieCharacters