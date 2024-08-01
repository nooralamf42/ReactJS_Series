import React from 'react'
import GrandChild from './GrandChild'
import "./all.css"
function Child({setCount}) {
  return (
    <div className='child'>
        <h1 >hello im child</h1>
        <GrandChild setCount={setCount}/>
      </div>
  )
}

export default Child