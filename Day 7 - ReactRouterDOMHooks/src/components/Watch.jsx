import React from 'react'
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'


function Watch() {
    const {id} = useParams()
    const navigate = useNavigate()
    const location = useLocation()
    const [getSearchParams] = useSearchParams()
    console.log(getSearchParams.get("name"))
    
  return (
    <div>Watch {id}
        <button onClick={()=>navigate('/products/footwear')}>Navigate</button>
    </div>
  )
}

export default Watch