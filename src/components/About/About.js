import React from 'react';

const About = props => {
  return (
    <section id="about" className='bg-light'>
     <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center wow animate__animated animate__fadeInUp"  data-wow-delay=".3s">
                <h2 className="margin-top-0 text-light hvr-grow">
                    <i className="fas fa-caret-left"></i>&nbsp; ABOUT &nbsp;<i className="fas fa-caret-right"></i>
                </h2>
                    <hr className="dark wow animate__animated animate__flash"  data-wow-delay=".3s" />
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-4 text-center">
                    <div className="feature">
                        <h3 className=" wow animate__animated animate__jello"  data-wow-delay=".5s">Cheap</h3>
                        <p className="wow animate__animated animate__fadeInUp" data-wow-delay=".5s">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 text-center">
                    <div className="feature">
                        <h3 className=" wow animate__animated animate__jello"  data-wow-delay=".5s">Reliable</h3>
                        <p className="wow animate__animated animate__fadeInUp" data-wow-delay=".5s">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 text-center">
                    <div className="feature">
                        <h3 className=" wow animate__animated animate__jello"  data-wow-delay=".5s">Valuable</h3>
                        <p className="wow animate__animated animate__fadeInUp" data-wow-delay=".5s">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default About;