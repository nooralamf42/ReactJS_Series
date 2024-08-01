import React, { useContext } from 'react'
import countContext from '../context/context'

function DecrementButton() {
    const {setCount} = useContext(countContext)
  return (
    <button onClick={()=>setCount(pre=>pre-1)}>-</button>
  )
}

export default DecrementButton