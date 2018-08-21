import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputString: ''
    }
  }
  
  updateInput = (input) => {
    this.setState(({
      inputString: input
  	}))
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input 
    		type="text" 
    		onChange={(event) => this.updateInput(event.target.value)}
    		placeholder="Say Something" 
    	  />
          <p className="echo">Echo:</p>
          <p>{this.state.inputString}</p>
        </div>
      </div>
    );
  }
}

export default App;
