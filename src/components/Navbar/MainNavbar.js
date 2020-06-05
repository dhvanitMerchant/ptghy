import React from "react";
import logo from '../images/whitelogo.png'
import {Link} from 'react-router-dom';
 // import SocialLinks from "../SocialLinks/SocialLinks";

function MainNav() {
  return (
      <nav id="topNav" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand page-scroll" href="#welcome-section">
                <img width="120px" height="50px"  style={{position:'relative', top:'-10px'}} alt="logo" src={logo}/>
                    
                </a>
            </div>
            <div className="navbar-collapse collapse" id="bs-navbar">
                <ul className="nav navbar-nav js-nav">
                    <li>
                        <a className="page-scroll hvr-underline-from-center" href="#welcome-section">HOME</a>
                    </li>
                    <li>
                        <a className="page-scroll hvr-underline-from-center" href="#about">About</a>
                    </li>
                    <li id= "drop" className="dropdown  page-scroll">
                    <a href="/" className="dropdown-toggle page-scoll hvr-underline-from-center" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Gallery</a>
                    <ul className="dropdown-menu page-scroll js-nav">
                        <li>
                        <Link to="/rituals" className="page-scroll hvr-underline-from-left">Rituals</Link>
                        </li>
                        <li>
                        <Link to="/rituals" className="page-scroll hvr-underline-from-left">Rituals</Link>
                        </li>
                        <li>
                        <Link to="/rituals"className="page-scroll hvr-underline-from-left">Rituals</Link>
                        </li>
                    </ul>
                    </li>
                   
                    <li>
                        <a className="page-scroll hvr-underline-from-center" href="#pricing">Pricing</a>
                    </li>
                   
                    <li>
                        <a className="page-scroll hvr-underline-from-center" href="#services">Services</a>
                    </li>
                 
                </ul>
                <ul className="nav js-nav navbar-nav navbar-right ">
                    <li>
                        <a className="page-scroll wow animate__animated animate__jello hvr-reveal"  data-wow-delay="7s"  href="#contact">
                            
                            Hire Me?
                        </a>
                    </li>
                </ul>
            </div>
        </div>
       
    </nav>
    
  );
};

export default MainNav;
