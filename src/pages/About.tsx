import React from 'react'
import { useNavigate } from 'react-router-dom'
function About() {

    let navigate = useNavigate()
  return (
    <div>
        About
        <button onClick={() => navigate("/", {state: "From the About Page"})}>Redirect</button>
        </div>
  )
}

export default About