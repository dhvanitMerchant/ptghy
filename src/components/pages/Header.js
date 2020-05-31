import React from 'react'

const Header = () => {
    return (
        <div>

            <header id="welcome-section" >
                {/* <div class="overlay"></div> */}

                <div className="container  animated flipInX " data-wow-delay=".3s">

                    <h1>
                        

                        <span className="line">We create</span>
                        <span className="line">Love <span className="color">&</span></span>
                        <span className="line">
                            
                            moments.
                        </span>
                    </h1>

                </div>

                <div class="scrolldown js-nav container">
                    <a href="#about">
                        <div class="chevron"></div>
                        <div class="chevron"></div>
                        <div class="chevron"></div>
                    </a>
                </div>
            </header>
        </div>

    );
};

export default Header;