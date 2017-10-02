import React from 'react'; 
import Guess from './guess';
import './history.css';  

export default function History(props){
    
    return (
        <div className="history">
            <Guess className="guess" value="1" />
            <Guess className="guess" value="2" />
            <Guess className="guess" value="3" />
        </div>  
    )
}