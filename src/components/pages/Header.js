import React from 'react'
import {Link} from 'react-router-dom'

const Header = props => {
    return (
        <header id="welcome-section">

            <div className="container">
                <Link to="#welcome-section" onClick={props.toggleMenu}>

                    <h1>

                        <span className="line">We</span>
                        <span className="line">create Love</span>
                        <span className="line">
                            <span className="color">&</span>
                            moments.
                        </span>
                    </h1>
                </Link>

            </div>

            <div class="scrolldown container">
                <Link to="/#about" onClick={props.toggleMenu}>
                    <div class="chevron"></div>
                    <div class="chevron"></div>
                    <div class="chevron"></div>
                </Link>
            </div>
        </header>

    );
};

export default Header;