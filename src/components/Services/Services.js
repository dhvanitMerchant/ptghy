import React from 'react';
import Progress from '../Progress/Progress';

const Services = props => {
  return (
    <section id="services">
      <div className="wrapper container">

      <div className="title">
            <h3>Services</h3>
            <p className="separator" />
      </div>
        <h1 className="text-center">What we Offer?</h1>
        <div class="row">
          <div class="col-5 mx-auto">
            <span className="label">Wedding Photography<Progress done="90"/></span>
            <span className="label">Pre-Wedding Photography<Progress done="90"/></span>
            <span className="label">Angagement Photography<Progress done="85"/></span>
            <span className="label">Event Photography<Progress done="80"/></span>
            <span className="label">Modelling Photoshoot<Progress done="80"/></span>
            <span className="label">Baby Photoshoot<Progress done="75"/></span>
            <span className="label">Meternity Photoshoot<Progress done="75"/></span>
            <span className="label">Product Photohoot<Progress done="70"/></span>
          </div>
          <div class="col-5 mx-auto">
              <div className="img"></div>
          </div>
        </div>
      </div>


    </section>
  );
}
export default Services;
