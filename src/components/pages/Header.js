import React from 'react'

const Header = () => {
    return (
        <header id="welcome-section"  className="welcome-section d-flex">
					<div className="container text-center my-auto animated flipInX " data-wow-delay=".3s">
						<h1 className="mb-1">
							<span className="line">We create</span>
							<span className="line">Love <span className="color">&</span></span>
							<span className="line">
								moments.
							</span>
						</h1>
							<a className="scrolldown js-nav page-scroll" href="#about">
								<div className="chevron"></div>
								<div className="chevron"></div>
								<div className="chevron"></div>
							</a>
						</div>
        </header>
    
    );
};

export default Header;