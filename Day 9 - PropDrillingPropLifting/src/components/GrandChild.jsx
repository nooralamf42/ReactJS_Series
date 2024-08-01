import React from 'react'
import "./all.css"
function GrandChild({setCount}) {
  return (
    <div className='grandchild'>
    <h1 >hello im grandchild </h1>
    <button onClick={()=>setCount(pre=>pre+1)}>update count value</button>
  </div>
  )
}

export default GrandChild