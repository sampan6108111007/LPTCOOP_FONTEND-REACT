import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div>Contact
        <Link to="/" state={"From Contact Page"}>Back to Home Page</Link>


    </div>
  )
}

export default Contact