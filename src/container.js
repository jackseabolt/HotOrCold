import React from 'react'; 
import Feedback from './feedback'; 
import History from './history'; 
import GuessZone from './guesszone'; 
import './container.css'

export default class Container extends React.Component {
    render(){
        return (
            <div className="container">   
                <Feedback />
                <GuessZone/>
                <History />
            </div>
        )
    }
}