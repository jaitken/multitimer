import React from 'react';
import Stopwatch from './Stopwatch';

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
            <div  style={{ textAlign: 'center'}}>
                <ul style={{ listStyle: 'none'}}>
                {this.state.Timers.map(item => (
                        <li key={item.key} >{item}</li>
                    ))}
                </ul>
                <button onClick={this.handleClick}>Add</button>
            </div>
          );
      }
  }

  export default TimerList;