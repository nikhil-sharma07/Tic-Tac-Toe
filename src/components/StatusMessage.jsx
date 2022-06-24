import React from 'react'

const StatusMessage = ({winner,current}) => {
    const noMovesLeft = current.board.every((el)=>{
        return el!=null;
    });
  return (
    <h2>
        {winner && (
          <div> 
            Winner is <span className={winner === 'X' ? 'text-orange':'text-green'}>{winner}</span>
          </div>
        )}
        {!winner && !noMovesLeft && (
        <>
          Next Turn: <span className={current.turnX ? 'text-orange':'text-green'}>{current.turnX ? 'X':'O'}</span>
        </>
        )}
        {!winner && noMovesLeft && 
          (
            <div>
            <span className='text-orange'>X</span> and 
            <span className='text-green'> O</span> tied!
            </div>
          )
        }
    </h2>
  );
};

export default StatusMessage