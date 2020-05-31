import React from "react";
import logo from '../images/blacklogo.png'

function MainNav() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
    {/* <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary"> */}
    
    <div className="nav-wrapper">
        <ul className="navbar-nav js-nav">
            <li className="nav-item">

                <a className="nav-link" href="#welcome-section">
                    HOME
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#about">
                    ABOUT
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#gallaries">
                    GALLARIES
                </a>
            </li>
        

        <a href="#welcome-section" className="text-center brand navbar-brand">
            <img className="logo" alt="logo" src={logo}/>
        </a>

            <li className="nav-item dropdown">
                <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false">
                    PRICING
                </a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="/">
                        Wedding
                    </a>
                    <a className="dropdown-item" href="/">
                        Photography
                    </a>
                </div>
            </li>
           
            <li className="nav-item">
                <a className="nav-link" href="#services">
                    SERVICES
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#contact">
                    CONTACT
                </a>
            </li>
        </ul>
    </div>
</nav> 
  );
}

export default MainNav;
