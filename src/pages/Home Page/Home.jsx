import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'

const Home = () => {
  return (
    <div className='for-Home-page'>
        <Navbar/>

        <div className='for-home-middle-section'>
            <h3>
                <span className='for-highlight-text'>Bridging </span>
                <span className='for-normal-text'>the gap inspiring the </span> 
                <span className='for-highlight-text'>feature</span>
            </h3>
        </div>
    </div>
  )
}

export default Home