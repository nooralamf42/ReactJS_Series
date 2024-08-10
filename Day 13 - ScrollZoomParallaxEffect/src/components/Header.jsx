import React from 'react'
import {motion } from 'framer-motion'

function Header() {
  return (
    <div 
    
    className='flex header'>
        <motion.h1
    initial={{y:-200}}
    animate={{y:0}}  
        >Scroll Down</motion.h1>
    </div>
  )
}

export default Header