import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
    };
  }

  handleIncrement = () => {
    this.setState({ score: this.state.score + 1 });
  };

  handleDecrement = () => {
    if (this.state.score > 0) {
      this.setState({ score: this.state.score - 1 });
    }
  };

  handleReset = () => {
    this.setState({ score: 0 });
  };

  render() {
    return (
      <div className="counter-container">
        <h1>Counter Application</h1>
        <div className="counter">
          <button className="counter-button increment" onClick={this.handleIncrement}>
            Increment
          </button>
          <p className="count-display">{this.state.score}</p>
          <button className="counter-button decrement" onClick={this.handleDecrement}>
            Decrement
          </button>
        </div>
        <button className="reset-button" onClick={this.handleReset}>
          Reset
        </button>
      </div>
    );
  }
}

export default App;
