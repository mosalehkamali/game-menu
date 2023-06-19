import React from 'react'
import {Link} from 'react-router-dom';


const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/Store">gonav</Link>
      <br></br>
      <Link to="/NavBar">gostore</Link>
    </div>
  )
}

export default Home
