import React from 'react'
import './about.css'
import videoBg from '../../assets/images/173687-849839051.mp4'; // Adjust the path as needed


const About = () => {
  return (
    <div className="about">
        <video className="background-video" autoPlay loop muted>
        <source src={videoBg} type="video/mp4" />
        </video>
        <div className="about-content">
            <h2>About Us</h2>
            <p>
                At VidyaSetu, we believe in making education accessible to everyone,
                no matter where they are. Our platform offers a diverse range of
                courses designed to ignite curiosity, build skills, and help learners
                achieve their goals. With personalized learning paths, expert 
                instructors, and a flexible approach, we are committed to empowering 
                students to learn at their own pace and succeed in their academic and 
                professional journeys. Whether you're seeking to enhance your knowledge 
                or gain new skills, VidyaSetu is your partner in lifelong learning.
            </p>
        </div>
    </div>
  )
}

export default About