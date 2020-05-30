/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import logo from '../images/blacklogo.png'

function Nav(props) {
    return ( 
    <> <nav id="navbar" className="navbar navbar-expand-sm">
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
                <img className="logo" alt="logo" src={logo}/>
            </a>

            <ul className="navbar-nav">
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

            <div className="hiddennav">
                <a
                    onClick={props.toggleMenu}
                    className={props.showMenu === 'active'
                    ? 'menu-button active'
                    : 'menu-button'}>
                    <span/>
                </a>
            </div>
        </div>
    </nav> </>
    );
};
export default Nav;