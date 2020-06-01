import React from "react";
import logo from '../images/whitelogo.png'
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
                        <a className="page-scroll" href="#welcome-section">HOME</a>
                    </li>
                    <li>
                        <a className="page-scroll" href="#about">About</a>
                    </li>
                    <li>
                        <a className="page-scroll" href="#gallaries">Gallery</a>
                    </li>
                    <li>
                        <a className="page-scroll" href="#pricing">Pricing</a>
                    </li>
                   
                    <li>
                        <a className="page-scroll" href="#services">Services</a>
                    </li>
                 
                </ul>
                <ul className="nav navbar-nav navbar-right ">
                    <li>
                        <a className="page-scroll wow animate__animated animate__jello"  data-wow-delay="7s"  href="#contact">
                            
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
