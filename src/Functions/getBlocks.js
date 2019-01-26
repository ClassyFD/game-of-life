import React from 'react';
const getBlocks = () => {
  const blocks = [];
  for (let i = 1; i <= 32; i++) {
    for (let j = 0; j <= 32; j++) {
      blocks.push((
        <div onClick={()=>{this.toggleBlock(i, j)}} key={`block-${i}-${j}`} className={`game-block block-${i}-${j}`}></div>
      ))
    }
  }
  return blocks;
}

export default getBlocks;