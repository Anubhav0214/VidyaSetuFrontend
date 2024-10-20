import React from 'react'
import "./home.css"
import { useNavigate } from 'react-router-dom'
import videoBg from '../../assets/images/143016-781982529.mp4';
import Testimonials from '../../components/testimonials/Testimonials';
const Home = () => {
    const navigate = useNavigate()
  return (
    <div>
    <div className='home-window'>
        <video className="home-background-video" autoPlay loop muted>
        <source src={videoBg} type="video/mp4" />
      </video>
        <div className="home-main">
            <div className="home-content">
                <h2> Welcome to  </h2>
                <div className='logo custom-font'>VidyaSetu</div>
                <h2>Empowering learning through accessible and engaging education for everyone, everywhere.</h2>
                <p>Learn, Grow, Excel</p>
                <button onClick={()=>navigate("/courses")}
                 className='common-btn'>Get Started</button>
            </div>
        </div>
        
    </div>
    <Testimonials/>
    </div>
  )
}

export default Home