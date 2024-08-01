
import { useState } from 'react'
import './app.css'

function App() {
  
  const [chars, setChar] = useState(0)
  const [words, setWords] = useState(0)

  const countHandler = (element) =>{
    let input = element.target.value
    
    setChar(input.length)
    setWords(input.trim().split(/\s+/).length)
  }

  return (
    <>
      <section className="box">
        <h1>Char : <span>{chars}</span> Words : <span>{words}</span></h1>
        <textarea onChange={(e)=>countHandler(e)} name="" id="" cols="30" rows="10"></textarea>

      </section>
    </>
  )
}

export default App
