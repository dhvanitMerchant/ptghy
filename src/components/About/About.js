import React from 'react';
import forest from '../images/camera.svg';

const About = props => {
  return (
    <section id="about">
      <div className="wrapper container">
        <article>
          <div className="title">
            <h3>Who's this guy?</h3>
            <p className="separator" />
          </div>
          <div className="desc full">
            <h4 className="subtitle">My name is Krunal Sonagara</h4>
            <p>
              <img alt="test" className= "img-thumbnail img-fluid" max-width= "100%" src={forest} />
          
             Content
            </p>
            <p>
              content
            </p>
          </div>
          <div className="title">
            <h3>What does he do?</h3>
            <p className="separator" />
          </div>
          <div className="desc">
            <h4 className="subtitle">I'm a photographer.</h4>
            <p>
             content
            </p>
            <p>
              content
            </p>
          </div>
          <div className="desc">
            <h4 className="subtitle">Also a event.</h4>
            <p>
              content
            </p>
            <p>
              content
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;