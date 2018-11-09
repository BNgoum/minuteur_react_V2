import React from 'react';
import './Timer.css';
import flammes from '../../img/flammes.svg';
import cloche from '../../img/plat.svg';

class Timer extends React.Component {
	constructor(props) {
  	super();
    this.state = {
      temps: props.duree,
      secondes: 0
    }
  }

  componentDidMount() {
    if ( !Number.isInteger( this.state.temps / 60 ) ) {
      let floatRestant = ( this.state.temps / 60 ) - ( Math.trunc(this.state.temps / 60 ));
      this.setState({ secondes: Math.round(floatRestant*60) }
    )}
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval( this.timerID );
  }

  tick() {
    if ( this.state.secondes === 0 ) {
      this.setState({
        secondes: 59,
        temps: this.state.temps-1
      })
    } else {
      this.setState({
        temps: this.state.temps-1,
        secondes: this.state.secondes-1
      });
    }
  }

  secondesToMinutes() {
    if ( this.state.temps/60 === 1 ) { return '00'; }

    if (( this.state.temps / 60) < 10 ) { return '0' + Math.trunc( this.state.temps / 60 ) }

    return Math.trunc( this.state.temps / 60 );
  }

  affichageSecondes() {
    if ( this.state.secondes < 10 ) { return '0' + this.state.secondes }

    return this.state.secondes;
  }

  affichageTimer() {
    if (this.state.temps === 0) {
      clearInterval(this.timerID);

      return (
        <h1>Votre plat : {this.props.libelle} est prêt ! <img src={cloche} alt="cloche animation" className="icone-cloche"/></h1>
      );
    }

    return (
      <div className="wrapper-cuisson-en-cours">
        <h1>La cuisson de votre plat : <br/> {this.props.libelle} <br/> est en cours...</h1>
        <img src={flammes} alt="flammes animation" className="icone-flammes" />
        <p className="timer-text">
          {this.secondesToMinutes()} : {this.affichageSecondes()}
        </p>
      </div>
      
    );
  }
  
  render() {
  	return (
      <div className="container">
        <div className="timer">{this.affichageTimer()}</div>
      </div>
    )
  }
}

export default Timer;