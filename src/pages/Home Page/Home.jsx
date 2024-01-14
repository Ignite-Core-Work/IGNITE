import React from 'react'
import './Home.css'
import globe from '../../assets/globe.png'
import Navbar from '../../components/Navbar/Navbar'
import group from '../../assets/Group.png';
import ass1 from '../../assets/Team goals-pana.png'

const Home = () => {
  return (
    <div className='for-Home-page'>

        <Navbar/>

        <div className='for-home-middle-section'>
          <div className='for-home-middle-first'>
            <h3>
                <span className='for-highlight-text'>Bridging </span>
                <span className='for-normal-text'>the gap inspiring the </span> 
                <span className='for-highlight-text'>feature</span>
            </h3>
            <p className='for-home-middle-para'>
                Foster the innovation and collaboration ignite,where students and alumni collaborate
            </p>
            <div className='for-home-button-section'>
          <button className="login-button">Login</button>
          <button className="signup-button">Register</button>
        </div>
            </div>
            <div className='for-home-middle-second'>
              <img src={group } className='for-group-image' />              
            </div>
                    
        </div>        

    </div>
  )
}

export default Home;