import { useState } from 'react'
import './app.css'

function App(){
    let [counter, setCounter] = useState(0)
    function addInCounter(){
        setCounter(pre=>pre+1)
    }

    function subtractInCounter(){
        setCounter(pre=>pre-1)
    }

    return(
        <section className="main">
            <button onClick={addInCounter}>+</button>
            <span>{counter}</span>
            <button onClick={subtractInCounter}>-</button>
        </section>
    )
}

export default App