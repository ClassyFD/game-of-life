import React, { Component } from 'react';
import '../styles/Game.css';
import getBlocks from '../Functions/getBlocks';
import update from 'immutability-helper';
class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blocks: [],
      gameActive: false,
      blockInterval: null,
    }
  }

  componentWillMount = () => {
    this.clearBoard()
  }

  toggleBlock = (id) => {
    const blocks = this.state.blocks;
    this.setState({
      blocks: update(
        blocks, 
        {[id]:{alive:{$set: blocks[id].alive? false : true}}} 
      )
    });
  }

  playFrame = (gameActive) => {
    const newBlocks = [];
    const blocks = this.state.blocks;
    blocks.forEach((blockEl)=>{
      let checkTop = true,
          checkRight = true,
          checkBottom = true,
          checkLeft = true,
          neighbors = 0;
      const id = blockEl.id,
        topBlock = id - 33,
        topLeftBlock = topBlock - 1,
        topRightBlock = topBlock + 1,
        leftBlock = id - 1,
        rightBlock = id + 1,
        bottomBlock = id + 33,
        bottomLeftBlock = bottomBlock - 1,
        bottomRightBlock = bottomBlock + 1;      
      if (blockEl.iAxis === 0) {
        checkTop = false;
      }
      if (blockEl.iAxis === 32) {
        checkBottom = false;
      }
      if (blockEl.jAxis === 0) {
        checkLeft = false;
      }
      if (blockEl.jAxis === 32) {
        checkRight = false;
      }
      if (checkTop) {
        if (checkLeft) {
          if (blocks[topLeftBlock].alive) {
            neighbors++;
          }
        }
        if (checkRight) {
          if (blocks[topRightBlock].alive) {
            neighbors++;
          }
        }
        if (blocks[topBlock].alive) {
          neighbors++;
        }
      }
      if (checkLeft) {
        if (blocks[leftBlock].alive) {
          neighbors++;
        }
      }
      if (checkRight) {
        if (blocks[rightBlock].alive) {
          neighbors++;
        }
      }
      if (checkBottom) {
        if (checkLeft) {
          if (blocks[bottomLeftBlock].alive) {
            neighbors++;
          }
        }
        if (checkRight) {
          if (blocks[bottomRightBlock].alive) {
            neighbors++;
          }
        }
        if (blocks[bottomBlock].alive) {
          neighbors++
        }
      }
      if (blockEl.alive && (neighbors < 2 || neighbors > 3)) {
        newBlocks.push({
          ...blockEl,
          alive: false,
        })
      } else if (blockEl.alive && (neighbors === 2 || neighbors === 3)) {
        newBlocks.push({
          ...blockEl,
          alive: true,
        })
      } else if (!blockEl.alive && neighbors === 3) {
        newBlocks.push({
          ...blockEl,
          alive: true,
        })
      } else if (!blockEl.alive) {
        newBlocks.push({
          ...blockEl,
          alive: false,
        })
      }
    })
    this.setState({
      blocks: newBlocks,
    })
  }

  blockInterval = () => {
    return setInterval(()=>{
      this.playFrame();
    }, 50)
  }

  startGame = (status) => {
    if (!status) {
      this.setState({
        gameActive: true,
        blockInterval: this.blockInterval(),
      })
    } else {
      clearInterval(this.state.blockInterval);
      this.setState({
        gameActive: false,
      })
    }
  }

  clearBoard = () => {
    this.setState({
      blocks: getBlocks(),
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
          <button onClick={()=>this.playFrame()} className="game-button game-next-button">Next</button>
          <button onClick={()=>this.startGame(this.state.gameActive? true : false)} className="game-button game-start-button">{this.state.gameActive? 'Stop' : 'Start'}</button>
          <button onClick={()=>this.clearBoard()} className="game-button game-clear-button">Clear</button>
          <button onClick={this.props.toggleRules} className="game-button game-rules-button">Rules</button>
        </section>
      </main>
    )
  }
}
export default Game;