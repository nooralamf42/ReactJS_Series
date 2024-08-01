import React, { useState } from 'react'
import './letter.css'
import { useSearchParams } from 'react-router-dom'

function Letter() {
    const [isCardVisible, setIsCardVisible] = useState(false)
    const [urlParam] = useSearchParams()
    const name = decodeURIComponent(atob((urlParam.get('name'))))
    const messege = decodeURIComponent(atob(urlParam.get('messege')))
  return (
    <div className="container">
        <div className={`envelope-wrapper ${isCardVisible && 'flap'}`}>
            <div className="envelope">
                <div className="letter">
                    <div className="text">
                        <strong>Dear {name}.</strong>
                        <p>
                            {messege} 
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="heart" onClick={()=>setIsCardVisible(pre=>!pre)}></div>
        </div>
    </div>
  )
}

export default Letter