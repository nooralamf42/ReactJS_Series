import React, { useContext } from 'react'
import countContext from '../context/context'


function Counter() {
    const {count} = useContext(countContext)
  return (
    <span>Counter : {count}</span>
  )
}

export default Counter