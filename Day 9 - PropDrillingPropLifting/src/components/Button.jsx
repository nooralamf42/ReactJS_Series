import React from 'react'
import "./all.css"

function Button(props) {
    console.log(props.updateCount)
  return (
    <button onClick={()=>props.updateCount(pre=>pre+1)}>Increase Count</button>
  )
}

export default Button