import React from 'react'

const Square = ({value, onClick, isWinningSquare}) => {
  return (
    <button type='button' className={`square ${isWinningSquare ? 'winning':''} ${value === 'X' ? 'text-orange':'text-green'}`} onClick={onClick} style={{fontWeight:isWinningSquare?'bold':'normal'}}>{value}</button>
  )
}

export default Square