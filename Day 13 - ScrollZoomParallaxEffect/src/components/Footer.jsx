import React from 'react'
import {motion } from 'framer-motion'

function Footer() {
  return (
    <div className='flex footer'>
        <motion.h1
            initial={{ opacity: 0.5, scale:0.5}}
            whileInView={{ opacity: 1, scale:1, transition:{duration: 0.2}}}
        >How was it?</motion.h1>
    </div>
  )
}

export default Footer