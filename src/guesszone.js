import React from 'react'; 
import './guesszone.css'; 

export default function GuessZone(props){
    return (
        <div class="guesszone">
            <input className="input" placeholder="Enter your Guess" />
            <p className="text">Guess #<span className="number">1</span>!</p>
        </div>
    )
}