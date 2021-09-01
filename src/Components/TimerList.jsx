import React from 'react';
import Stopwatch from './Stopwatch';

import './TimerListStyle.css'

class TimerList extends React.Component{
    
    constructor(props) {
        super(props);
    
         this.state = {
            Timers: [<Stopwatch message = '1'/>]
        };

        this.handleClick = this.handleClick.bind(this);  

     }


    handleClick(){
        this.setState(prevState => ({
            Timers: [...prevState.Timers, <Stopwatch message={this.state.Timers.length + 1}/>]
          }))
    }
    
    render(){
          return(
            <div id='timerListContainer'>
                <ul id="list">
                {this.state.Timers.map(item => (
                        <li id='listItem' key={item.key} >{item}</li>
                    ))}
                </ul>
                <button id='addButton' onClick={this.handleClick}>+</button>
            </div>
          );
      }
  }

  export default TimerList;