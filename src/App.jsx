import React,{useState} from "react";
import Board from "./components/Board";
import History from "./components/History";
import StatusMessage from "./components/StatusMessage";
import "./styles/root.scss";
import { calculateWinner } from "./helpers";

const App=()=>{
  const [history, setHistory] = useState([{board:Array(9).fill(null), turnX:true}]);
  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];
  const winner=calculateWinner(current.board);

const handleSquareClick = (position) => {
  if(current.board[position] || winner){
    return;
  }
  
  const last=history[history.length-1];
  
  const newBoard=last.board.map((el,pos)=>{
    if(pos==position){
      return last.turnX ? 'X':'O';
    }
    return el;
  });

  setHistory(prev => {
    return prev.concat({board: newBoard, turnX:!last.turnX});
  });
  
  setCurrentMove(prev=>prev+1);
};

const moveTo = (move) => {
  setCurrentMove(move);
}

  return(
    <div className="app">
    <h1>TIC-TAC-TOE</h1>
    <StatusMessage winner={winner} current={current}/>
    <Board board={current.board} handleSquareClick={handleSquareClick}/>
    <History history={history} moveTo={moveTo} currentMove={currentMove}/>
    </div>
  ); 
};


export default App;