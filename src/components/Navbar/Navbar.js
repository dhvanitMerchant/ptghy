/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import logo from '../images/blacklogo.png'

/***********************
  Nav Component
 ***********************/

const Nav = props => {
  return (
    <React.Fragment>
      <nav id="navbar" className="navbar navbar-expand-sm">
        <div className="nav-wrapper">
          <ul className="navbar-nav">
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
            </ul>

            <a href="#welcome-section" className="text-center brand navbar-brand">
            <img className="logo"alt = "logo"   src={logo} />
            </a>
          <ul className="navbar-nav">
{/*             
            <div class="dropdown">
              <button class="dropbtn">Dropdown 
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>  */}



            <li className="nav-item">
              <a class="nav-link" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                PRICING
              </a>
              <div class="dropdown-menu dropdown-content" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#wedding">Wedding Photography</a>
                <a class="dropdown-item" href="#engagement">Engagement Photography</a>
                <a class="dropdown-item" href="#pre">Pre-wedding Photography</a>
                <a class="dropdown-item" href="#event">Event/Concert Photography</a>
                <a class="dropdown-item" href="#modelling">Modelling Photoshoot</a>
                <a class="dropdown-item" href="#product">Product Shoot</a>
                <a class="dropdown-item" href="#maternity">Maternity Shoot</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                SERVICES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" >
                CONTACT
              </a>
            </li>
          </ul>
         
          <div className="hiddennav">     
          <a onClick={props.toggleMenu} className={props.showMenu === 'active' ? 'menu-button active' : 'menu-button'} >
            <span />
          </a>
          </div>
        </div> 
      </nav>
    </React.Fragment>
  );
};


export default Nav;