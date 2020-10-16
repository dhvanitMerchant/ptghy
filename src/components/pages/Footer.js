import React from 'react'
import SocialLinks from '../SocialLinks/SocialLinks';

export default function NewFooter() {
    return (
        <footer id="footer">
        <div className="container">
            <div className="row">
            <div className="col-xs-6 col-sm-3">
                <span>
                <h4>THANKS FOR VISITING</h4>
              <h5 className="date mb-0 cursive">© {new Date().getFullYear()} MOMENTS </h5>
                 </span>
                </div>
                <div className="col-xs-6 col-sm-3 column">
                    <h4>Information</h4>
                    <ul className="list-unstyled">
                        <li><a href="#packages">Products</a></li>
                        <li><a href="#services">Services</a></li>
                        <li>
                        <a href="/images/CATALOUGE.pdf" download>
                            Catalouge
                        </a>
                        </li>

                    </ul>
                </div>
                <div className="col-xs-12 col-sm-3 column">
                    <h4>About</h4>
                    <ul className="list-unstyled">
                        <li><a href="#contact">Contact Us</a></li>
                        <li><a href="#home">Privacy Policy</a></li>
                        <li><a href="#home">Terms &amp; Conditions</a></li>
                    </ul>
                </div>
            
        
                <div className="col-xs-12 col-sm-3 text-center">
                    <h4>Follow</h4>
                    <ul className="list-inline">
                        <SocialLinks />
                    </ul>
                </div>
            </div>
            <br/>
            
        </div>
    </footer>

    )
}
