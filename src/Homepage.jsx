import React from 'react';
import image from './Images/byte-code_logo.svg';
import './Styles/Homepage.css';
import { FaInstagram, FaTwitter, FaFacebook, FaGithub } from "react-icons/fa";
import Animated_logo from './Components/Animated_logo';




function Homepage() {
    

    
    return (
      <div className='bcl-intro'>
        {/* <!-- background animation --> */}
          <div class="wrapper">
              <ul class="bg-bubbles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>

{/* <!-- background animation end --> */}




       <div class="content bcl-align-items-center">
        <div class="bcl-intro-text-container">
          <div class="bcl-intro-text">
            <div class="heading">CODING COMMUNITY</div>
            <div class="sub-text">Let's Create Something Ctrl + N</div>
          </div> 
           <div class="bcl-social-link-container">
            <div class="bcl-social-links">
                <a href="https://www.instagram.com/bytecode_learners/" target="_blank"><FaInstagram size='2em' class="bcl-social-media-icons"  dark/></a>
                <a href="https://twitter.com/BytecodeL" target="_blank"><FaTwitter size='2em' class="bcl-social-media-icons" dark/></a>
                <a href="https://www.facebook.com/groups/bytecodelearners/" target="_blank"><FaFacebook size='2em' class="bcl-social-media-icons" /></a>
                <a href="https://github.com/ByteCodeLearners/" target="_blank"><FaGithub size='2em' class="bcl-social-media-icons" dark/></a>            
            </div>
         </div>
        </div>
        <div class="bcl-side-image bcl-align-items-center ">
        <img src={image}/>
        {/* <Animated_logo className='animated_logo'/> */}
        </div>
      </div>
      
      


        </div>
    )
}

export default Homepage
