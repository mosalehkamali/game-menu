import React from 'react'
import "./Home.css";
import Hbtn from './HomeButtons/Hbtn';




const Home = () => {


  return (
    <div className='home'>
      <h1 className='main-title'>Black Hill</h1>
      <div className="main-list">
      <Hbtn InnerBtn="Start" path ="/Store"></Hbtn>
      <Hbtn InnerBtn="NavBar" path ="/NavBar"></Hbtn>
      <Hbtn InnerBtn="Store" path ="/Store"></Hbtn>
      <Hbtn InnerBtn="About" path ="/NavBar"></Hbtn>
      </div>
    </div>
  )
}

export default Home
