import React from 'react'
import SocialLinks from '../SocialLinks/SocialLinks';


const Footer = props => {
    return (
      <footer>
        <section id="footer">
        <div className="footer text-center">
          <hr></hr>
          <div className="row">
            <div className="col-lg-6 mb-4">
              <h3>THANKS FOR VISITING</h3>
              <h6 className="date mb-0">© {new Date().getFullYear()} Moments</h6>
            </div>
            <div className="col-lg-6 mb-4">
              <SocialLinks  />
            </div>
          </div>
        </div>
        </section>
      </footer>
    );
  };


  export default Footer;