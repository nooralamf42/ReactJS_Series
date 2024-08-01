import {useState} from 'react'


function App(){
  let [count, setCount] = useState(1)
  return (<h1 onClick={()=>setCount((pre)=>pre+1)}>Counter {count}</h1>)
}

export default App