import React, { Component } from 'react';
import '../styles/Rules.css';
import { TimelineMax, TweenMax } from 'gsap';

class Rules extends Component {
  componentDidMount = () => {
    TweenMax.to('.Rules', 0, {opacity:0, height: 0, width: 0})
  }
  componentWillReceiveProps = (props) => {
    const tl = new TimelineMax();
    const stl = new TimelineMax();
    if (props.rulesOpen) {
      tl.to('.Rules', 0, {height: 400, width: 500}).to('.Rules', .3, {opacity: 1});
      stl.to('.rules-shade', 0, {height: '110vh', width: '100%'}).to('.rules-shade', .3, {backgroundColor: 'rgba(0, 0, 0, .5)'})
    } else {
      tl.to('.Rules', .3, {opacity: 0}).to('.Rules', 0, {height: 0, width: 0})
      stl.to('.rules-shade', .3, {backgroundColor: 'rgba(0, 0, 0, 0)'}).to('.rules-shade', 0, {height: 0, width: 0})
    }
  }
  render() {
    return (
      <article className="Rules">
        <header className="rules-header">Game of Life</header>
        <div onClick={this.props.toggleRules} className="rules-exit-button">X</div>
        <h1 className="rules-title">For a space that is "populated":</h1>
        <ol>
          <li>Each cell with one or no neighbors dies, as if by solitude.</li>
          <li>Each cell with four or more neighbors dies, as if by overpopulation.</li>
          <li>Each cell with two or three neighbors survives.</li>
        </ol>
        <h1 className="rules-title">For a space that is "empty" or "unpopulated":</h1>
        <ol>
          <li>Each cell with three neighbors becomes populated.</li>
        </ol>
        <h1 className="rules-title">How to start:</h1>
        <ul>
          <li>Make a figure by clicking on the cells with a mouse.</li>
          <li>A new generation of cells (corresponding to one iteration of the rules) is initiated by the "Next" button.</li>
          <li>The "Start" button advances the game by several generations.</li>
          <li>The game advances by one generation every 50ms.</li>
        </ul>
        <footer className="rules-footer">
          <a href="https://bitstorm.org/gameoflife/" target="_blank" rel="noopener noreferrer">John Conway's Game of Life</a>
        </footer>
      </article>
    )
  }
}
export default Rules;