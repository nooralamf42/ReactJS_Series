import { Routes, Route } from 'react-router-dom'
import './App.css'
import Watch from './components/Watch'

function App() {
  let name = "Noor"

  return (
    <Routes>
      <Route path='/products'>
        <Route path='watches'>
          <Route path=':id' Component={Watch}/>
        </Route>
        <Route path='footwear' element={<h1>Footwear</h1>}/>
      </Route>
    </Routes>
  )
}

export default App
