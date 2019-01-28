const getBlocks = () => {
  const blocks = [];
  let id = 0;
  for (let i = 0; i <= 32; i++) {
    for (let j = 0; j <= 32; j++) {
      blocks.push({
        id,
        alive: false,
        iAxis: i,
        jAxis: j,
      })
      id++
    }
  }
  return blocks;
}

export default getBlocks;