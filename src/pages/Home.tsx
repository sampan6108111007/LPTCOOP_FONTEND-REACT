import React from 'react'
import { useLocation } from 'react-router-dom'

function Home() {

let location = useLocation()
    
  return (
    <div>Home
        {location.state}
    </div>
  )
}

export default Home