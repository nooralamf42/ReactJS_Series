import { useState } from 'react'

import Cards from './components/Cards'

function App(props) {
  console.log(props.myName)
  return (
    <Cards/>
  )
}

export default App
