import React, { Component } from 'react';
import '../styles/Game.css';
import getBlocks from '../Functions/getBlocks';
class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    getBlocks.toggleBlock = this.toggleBlock.bind(this);
  }
  toggleBlock = (axis1, axis2) => {
    console.log('testing')
  }

  render() {
    const blocks = getBlocks();
    return (
      <main className="Game">
        <section>
          {blocks}
        </section>
      </main>
    )
  }
}
export default Game;