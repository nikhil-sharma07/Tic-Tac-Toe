import React,{useState} from "react";
import Board from "./components/Board";
import "./styles/root.scss";
import { calculateWinner } from "./helpers";

const App=()=>{
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turnX, setX] = useState(false);
  const winner=calculateWinner(board);

  const message=winner?`Winner is ${winner}`: `Next Turn: ${turnX ? 'X':'O'}`; 

const handleSquareClick = (position) => {
  if(board[position] || winner){
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
  return(
    <div className="app">
    <h1>TIC-TAC-TOE</h1>
    <h2>{message}</h2>
    <Board board={board} handleSquareClick={handleSquareClick}/>
    </div>
  ); 
};


export default App;