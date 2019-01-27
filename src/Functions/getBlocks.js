import React from 'react';
const getBlocks = (context) => {
  const blocks = [];
  let id = 0;
  for (let i = 0; i <= 32; i++) {
    for (let j = 0; j <= 32; j++) {
      blocks.push({
        id,
        alive: false,
        iAxis: i,
        jAxis: j,
        aliveBlock: (
          <div onClick={()=>{context.toggleBlock(i, j)}} key={`block-${i}-${j}`} className={`game-block game-block-${i}-${j} game-block-alive`}></div>
        ),
        deadBlock: (
          <div onClick={()=>{context.toggleBlock(i, j)}} key={`block-${i}-${j}`} className={`game-block game-block-${i}-${j} game-block-dead`}></div>
        )
      })
      id++
    }
  }
  return blocks;
}

export default getBlocks;