import React, { Component } from "react";
import "./App.css";

class Timer extends Component {
    state = {
        timerOn: false,
        timerStart: 0,
        timerTime: 0
      };
      startTimer = () => {
        this.setState({
          timerOn: true,
          timerTime: this.state.timerTime,
          timerStart: Date.now() - this.state.timerTime
        });
        this.timer = setInterval(() => {
          this.setState({
            timerTime: Date.now() - this.state.timerStart
          });
        }, 10);
      };
      stopTimer = () => {
        this.setState({ timerOn: false });
        clearInterval(this.timer);
      };
      resetTimer = () => {
        this.setState({
          timerStart: 0,
          timerTime: 0
        });
      };
  render() {
    const { timerTime } = this.state;
    
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
    return (
        <section>

      
        <div className="Timer-display">
            <div>
                <p> {hours} </p>
                <p>Hour</p>
            </div>
            <div>
                <p> {minutes} </p>
                <p>Minutes</p>
            </div>
            <div>
                <p> {seconds} </p>
                <p>Seconds</p>
            </div>
       </div>
       <div className="btns">
             {this.state.timerOn === false && this.state.timerTime === 0 && (
            <button onClick={this.startTimer}>Start</button>
            )}
            {this.state.timerOn === true && (
            <button onClick={this.stopTimer}>Stop</button>
            )}
            {this.state.timerOn === false && this.state.timerTime > 0 && (
            <button onClick={this.startTimer}>Resume</button>
            )}
        
            <button onClick={this.resetTimer}>Reset</button>
       </div>
        
      
      </section>
    );
  }
}
export default Timer;