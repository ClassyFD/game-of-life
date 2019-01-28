import React, { Component } from 'react';
import '../styles/Game.css';
import getBlocks from '../Functions/getBlocks';
import update from 'immutability-helper';
class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blocks: []
    }
  }

  componentWillMount = () => {
    this.setState({
      blocks: getBlocks()
    })
  }

  toggleBlock = (id) => {
    this.setState({
      blocks: update(
        this.state.blocks, 
        {[id]:{alive:{$set: this.state.blocks[id].alive? false : true}}} 
      )
    });
  }

  playFrame = () => {
    this.state.blocks.forEach((el)=>{
      console.log(el)
    })
  }

  render() {
    return (
      <main className="Game">
        <section className="game-map">
          {this.state.blocks.map((blockEl)=>{
            return (
              <div 
                key={`block-${blockEl.iAxis}-${blockEl.jAxis}`} 
                onClick={()=>{this.toggleBlock(blockEl.id)}} 
                className={`game-block game-block-${blockEl.iAxis}-${blockEl.jAxis} ${blockEl.alive? 'game-block-alive' : 'game-block-dead'}`}
              />
            ) 
          })}
        </section>
        <section className="game-button-container">
          <button onClick={()=>this.playFrame()} className="game-next-button">Next</button>
        </section>
      </main>
    )
  }
}
export default Game;