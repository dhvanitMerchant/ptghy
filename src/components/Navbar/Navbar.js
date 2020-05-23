/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';


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
            <a href="#welcome-section" className="brand navbar-brand">
            Mom
            <strong>ents</strong>
          </a>
          <ul className="navbar-nav">

            <li className="nav-item">
              <a className="nav-link" href="#pricing">
                PRICING
              </a>
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