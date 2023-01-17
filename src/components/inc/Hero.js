import React from 'react'
import vid from '../videos/video-1.mp4'


function Hero() {
  return (
    <div className='hero-container'>
      <video src={vid} autoPlay loop muted></video>
      <div className='inner-div'><h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      </div>
    </div>
  )
}

export default Hero;
