import React from 'react'

export default function History({history,moveTo,currentMove}) {
  return (
    <ul>
        {
            history.map((_,move) => {
                return <li key={move}><button style={{fontWeight:move===currentMove?'bold':'normal'}} type="button" onClick={()=>{moveTo(move);}}>{move===0 ? `GO TO THE START` : `GO TO MOVE #${move}`}</button></li>;
            })
        }
        
    </ul>
  )
}
