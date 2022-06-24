import React from 'react'

const StatusMessage = ({winner,current}) => {
    const noMovesLeft = current.board.every((el)=>{
        return el!=null;
    });
  return (
    <h2>
        {winner && `Winner is ${winner}`}
        {!winner && !noMovesLeft && `Next Turn: ${current.turnX ? 'X':'O'}`}
        {!winner && noMovesLeft && `Match Tied!!`}
    </h2>
  );
};

export default StatusMessage