import { useEffect, useState } from 'react'
import './App.css'

function App() {
  let [quote , setQuote] = useState([])
  let [randomIndex, setRandomIndex] = useState(Math.floor(Math.random()*30))

  useEffect(()=>{
    fetch('https://dummyjson.com/quotes')
            .then(res=>res.json())
            .then(data=>setQuote(data.quotes[randomIndex]))
  }, [randomIndex])
  
  const randomIndexHandler = () =>{
    setRandomIndex(Math.floor(Math.random()*30))
  }

  if(quote==[]){
    return <h1>Loading</h1>
  }

  else
  return (
    <div className="quote-card">
        <div className="quote-content">
            <p className="quote-text">{quote.quote}</p>
            <p className="quote-author">- {quote.author}</p>
            <button onClick={randomIndexHandler}>Get Another</button>
        </div>
    </div>
  )
}

export default App
