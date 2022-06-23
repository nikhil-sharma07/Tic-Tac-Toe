import React,{useState} from 'react'
import Square from './Square'

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turnX, setX] = useState(false);

const handleSquareClick = (position) => {
  if(board[position]){
    return;
  }
  
  const newState=board.map((el,pos)=>{
    if(pos==position){
      return turnX ? 'X':'O';
    }
    return el;
  });

  setBoard(newState);
  if(turnX){
    setX(false);
  }else{
    setX(true);
  }
};


const renderSquare=(position)=>{
  return (
    <Square 
      value={board[position]} 
      onClick={() => {handleSquareClick(position)}}
    />
  );
};



  return (
    <div className='board'>
        <div className='board-row'>
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
        </div>
        <div className='board-row'>
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
        </div>
        <div className='board-row'>
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
        </div>
    </div>
  )
}

export default Board