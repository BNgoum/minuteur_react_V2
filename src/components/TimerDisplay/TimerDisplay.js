import React, {Component} from 'react';
import './TimerDisplay.css';
import flammes from '../../img/flammes.svg';
import cloche from '../../img/plat.svg';

class TimerDisplay extends Component {
    render() {
        if ( (this.props.minutes === 0 && this.props.secondes === 0) || (this.props.minutes === '00' && this.props.secondes === '00') ) {
            clearInterval( this.props.timer );
            return (
              <div className="wrapper-block-timeout">
                <h3>Le plat { this.props.libelle } est prêt !!!</h3>
                <img src={cloche} alt="cloche animation" className="icone-cloche"/>
              </div>
            )
        }
      
        return (
            <div className="wrapper-cuisson-en-cours">
                <h3>La cuisson de votre plat <br/> {this.props.libelle} <br/> est en cours...</h3>
                <img src={flammes} alt="flammes animation" className="icone-flammes" />
                <div className="wrapper-timer">
                <p>{this.props.minutes < 10 ? '0' + this.props.minutes : this.props.minutes}</p>
                <p>:</p>
                <p>{this.props.secondes < 10 ? '0' + this.props.secondes : this.props.secondes}</p>
                </div>
            </div>
        )
    }
}

export default TimerDisplay;