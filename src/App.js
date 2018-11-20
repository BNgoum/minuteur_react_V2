import React, { Component } from 'react';
import './App.css';

import Timer from './components/Timer/Timer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timers: 1
    }
  }

  addNewTimer = () => {
    this.setState({
      timers: this.state.timers + 1
    })
  }

  displayTimers() {
    let arrayTimer = [];

    for (let i = 0; i < this.state.timers; i++) {
      arrayTimer.push(<Timer />);
    }

    return arrayTimer;
  }

  render() {
    return (
      <div className="App">
        <h1>Minuteurs</h1>
        <div className="wrapper-content">
          <div className="wrapper-timers">
            {this.displayTimers()}
          </div>
          <button onClick={this.addNewTimer} className="btn-add-timer">+</button>
        </div>
        
      </div>
    );
  }
}

export default App;
