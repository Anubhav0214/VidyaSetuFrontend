import React from 'react'
import './footer.css'
import { FaFacebook } from "react-icons/fa6";
import { PiInstagramLogoBold } from "react-icons/pi";
import { SiLinkedin } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
        <div className="footer-content">
            <p>
                &copy; 2024  VidyaSetu . All rights reserved. <br/
                >Made with ❤️ by <a href='https://github.com/Anubhav0214'>Anubhav Mishra</a>
            </p>
            <div className="social-links">
                <a href="https://www.linkedin.com/in/anubhav-mishra-7b287b233/">< SiLinkedin/></a>
                <a href="https://www.instagram.com/_anubhav_mishra_214/"><PiInstagramLogoBold/></a>
                <a href="https://www.facebook.com/profile.php?id=100009182325531">< FaFacebook/></a>
            </div>
        </div> 
    </footer>
  )
}

export default Footer