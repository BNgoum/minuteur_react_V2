import React from 'react';
import './Timer.css';
import TimerDisplay from '../TimerDisplay/TimerDisplay';

class Timer extends React.Component {
	constructor(props) {
  	super();
    this.state = {
      libelle: "",
      temps: 0,
      heures: 0,
      minutes: 0,
      secondes: 0,
      step1: true,
      step2: false
    }
  }

  componentWillUnmount() {
    clearInterval( this.timerID );
  }

  inputTimeToSecondes() {
    let res = 0;
    if (this.state.heures > 0) {
      res = res + this.state.heures * 3600;
    }

    if (this.state.minutes > 0) {
      res = res + this.state.minutes * 60;
    }

    if (this.state.secondes > 0) {
      res = res + this.state.secondes;
    }

    return res;
  }

  affichageStep1() {
    return (
      <div className="wrapper-step1">
        <input type="text" name="name" onChange={this.handleChangeLibelle} placeholder="Saisissez le nom du plat" />
        <div className="wrapper-inputs-text">
          <input type="number" name="saisie des minutes" placeholder="Minutes" onChange={this.handleChangeMinutes} min="0" max="59"/>
          <p>:</p>
          <input type="number" name="saisie des secondes" placeholder="Secondes" onChange={this.handleChangeSecondes} min="0" max="59"/>
        </div>

        <button className="button-start" onClick={this.handleChangeStep}>Start</button>
      </div>
    )
  }

  tick() {
    if ( this.state.secondes === 0 ) {
      this.setState({
        secondes: 59,
        minutes: this.state.minutes - 1
      })
    } else {
      this.setState({
        secondes: this.state.secondes - 1
      });
    }
  }

  handleChangeStep = () => {
    this.setState({
      step1: false,
      step2: true,
      temps: this.inputTimeToSecondes()
    })

    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  handleChangeLibelle = (e) => {
    this.setState({
      libelle: e.target.value
    })
  }

  handleChangeHeures = (e) => {
    this.setState({
      heures: e.target.value
    })
  }

  handleChangeMinutes = (e) => {
    if (e.target.value > 59) {
      e.target.value = 59;
    }

    this.setState({
      minutes: parseInt(e.target.value)
    })
  }

  handleChangeSecondes = (e) => {
    if (e.target.value > 59) {
      e.target.value = 59;
    }

    this.setState({
      secondes: e.target.value
    })
  }
  
  render() {
  	return (
      <div className="container-timer">
        {this.state.step1 ? 
          this.affichageStep1() : 
          <TimerDisplay 
            minutes={this.state.minutes} 
            secondes={this.state.secondes} 
            libelle={this.state.libelle} 
            timer={this.timerID} />
        }
      </div>
    )
  }
}

export default Timer;