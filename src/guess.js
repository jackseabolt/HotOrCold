import React from 'react'; 
import './guess.css'; 

export default function(props){
    return (
        <div className="guess">
            {props.value}
        </div>
    )
}