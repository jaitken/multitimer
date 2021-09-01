import React from 'react';
import './StopwatchStyle.css'

class Stopwatch extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "Stopwatch "+ this.props.message,
            time: 0,
            isOn: false,
            start: 0
        }
        this.startTimer = this.startTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
        this.handleInput = this.handleInput.bind(this)
    }


    handleInput(event){
        this.setState({name:event.target.value})
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    startTimer() {
        this.setState({
          isOn: true,
          time: this.state.time,
          start: Date.now() - this.state.time
        });
    
        this.timer = setInterval(() => this.setState({
          time: Date.now() - this.state.start
          }), 10);
      }

    stopTimer() {
        this.setState({isOn: false})
        clearInterval(this.timer)
    }
    
    resetTimer() {
        this.setState({time: 0, isOn: false})
    }


    render(){
        let start = (this.state.time === 0) ? <button onClick={this.startTimer}>start</button> : null
    
        let stop = (this.state.time === 0 || !this.state.isOn) ? null : <button onClick={this.stopTimer}>stop</button>
      
        let resume = (this.state.time === 0 || this.state.isOn) ? null : <button onClick={this.startTimer}>resume</button>
      
        let reset = (this.state.time === 0 || this.state.isOn) ? null : <button onClick={this.resetTimer}>reset</button>
    
        let seconds = (this.state.time/1000%60).toFixed(2);
        let mins = Math.floor(this.state.time/1000/60);
        
        
    return(
        <div id='stopwatchContainer'>
            <div id="nameInputContainer">
                <input id="nameInput" type="text" value={this.state.name} onChange={this.handleInput} />
            </div>
          <h1>{mins}:{seconds}</h1>
          {start}
          {resume}
          {stop}
          {reset}
         
        </div>
      )
    }
}
export default Stopwatch;