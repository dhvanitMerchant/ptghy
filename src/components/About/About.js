import React from 'react';

const About = props => {
  return (
    <section id="about" className='bg-light'>
     <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center wow slideInUp"  data-wow-delay=".3s">
                    <h2 className="margin-top-0 text-dark">About</h2>
                    <hr className="dark" />
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-4 text-center">
                    <div className="feature">
                        <i className="wow fadeInRight" data-wow-delay=".3s"></i>
                        <h3>Cheap</h3>
                        <p className="wow fadeInRight" data-wow-delay=".5s">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 text-center">
                    <div className="feature">
                        <i className="icon-lg ion-social-sass wow fadeInRightUp" data-wow-delay=".2s"></i>
                        <h3>Relable</h3>
                        <p className="wow fadeInRight" data-wow-delay=".5s">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 text-center">
                    <div className="feature">
                        <i className="icon-lg ion-ios-star-outline wow fadeInRight" data-wow-delay=".3s"></i>
                        <h3>Valuable</h3>
                        <p className="wow fadeInRight" data-wow-delay=".5s">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default About;