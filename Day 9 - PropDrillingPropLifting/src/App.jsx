import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import Child from './components/Child'

function App() {
  const [count, setCount] = useState(1)

  return (
    <div className='parent'>
      <h1>hello im parent and count value is {count}</h1>
     <Child setCount={setCount}/>
    </div>
  )
}

export default App
