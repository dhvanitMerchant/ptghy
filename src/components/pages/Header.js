import React from 'react'

const Header = () => {
    return (
        <header id="welcome-section"  className="welcome-section d-flex">
					<div className="container text-center my-auto">
						<h1 className="mb-1">
							<span className="line wow fadeInRight" data-wow-delay=".5s">We create</span>
							<span className="line wow fadeIn" data-wow-delay=".5s">Love
							 <span className="color wow fadeIn" data-wow-delay=".5s">&</span>
							 </span>
							<span className="line wow fadeInLeft" data-wow-delay=".5s">
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