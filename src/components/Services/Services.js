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
		<Progress label="Weeding" done="70"/>
</div>
    </section>
  );

  
}
export default Services;
