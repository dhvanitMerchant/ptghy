/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';


/***********************
  Nav Component
 ***********************/

const Nav = props => {
  return (
    <React.Fragment>
      <nav id="navbar" className="navbardd">
        <div className="nav-wrapper">
          <p className="brand">
            Mom
            <strong>ents</strong>
          </p>
          <a onClick={props.toggleMenu} className={props.showMenu === 'active' ? 'menu-button active' : 'menu-button'} >
            <span />
          </a>
        </div>
      </nav>
    </React.Fragment>
  );
};


export default Nav;