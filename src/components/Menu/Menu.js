import React from 'react';
import SocialLinks from '../SocialLinks/SocialLinks';
/***********************
  Menu Component
 ***********************/

const Menu = props => {
    return (
      <div className={`menu-container ${props.showMenu}`}>
        <div className="overlay" />
        <div className="menu-items">
          <ul>
            <li>
              <a href="#welcome-section" onClick={props.toggleMenu}>
                HOME
              </a>
            </li>
            <li>
              <a href="#about" onClick={props.toggleMenu}>
                ABOUT
              </a>
            </li>
         
          </ul>
          <SocialLinks />
        </div>
      </div>
    );
  };
export default Menu;  