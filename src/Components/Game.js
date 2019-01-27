import React, { Component } from 'react';
import '../styles/Game.css';
import getBlocks from '../Functions/getBlocks';
class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blocks: []
    }
  }

  componentWillMount = () => {
    this.setState({
      blocks: getBlocks(this)
    })
  }

  toggleBlock = (iAxis, jAxis) => {
    console.log(iAxis)
    console.log(jAxis)
    this.state.blocks.map((blockEl)=>{
      
    })
  }

  render() {
    return (
      <main className="Game">
        <section>
          {this.state.blocks.map((blockEl)=>{
            return blockEl.alive? blockEl.aliveBlock : blockEl.deadBlock;
          })}
        </section>
      </main>
    )
  }
}
export default Game;