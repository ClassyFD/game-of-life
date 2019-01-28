import React, { Component } from 'react';
import Game from './Components/Game';
import './App.css';
import Rules from './Components/Rules';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rulesOpen: false,
    }
  }
  toggleRules = () => {
    this.setState({
      rulesOpen: this.state.rulesOpen? false : true,
    })
  }

  render() {
    return (
      <div className="App">
        <Game toggleRules={this.toggleRules}/>
        <Rules toggleRules={this.toggleRules} rulesOpen={this.state.rulesOpen}/>
        <div className="rules-shade"/>
      </div>
    );
  }
}

export default App;
