import React from 'react';

/***********************
  Contact Component
 ***********************/

const Contact = props => {
  return (
    <section id="contact" className="text-light bg-dark">
     <div class="container ">
            <div class="row ">
                <div class="col-lg-8 col-lg-offset-2 text-center">
                    <h2 class="margin-top-0 animated bounce" >Get in Touch</h2>
                    <hr class="light"/>
                </div>
                <div class="col-lg-10 col-lg-offset-1 text-center">
                    <form class="contact-form row">
                        <div class="col-md-6">
                            <label></label>
                            <input type="text" class="form-control" placeholder="Name"/>
                        </div>
                        <div class="col-md-6">
                            <label></label>
                            <input type="text" class="form-control" placeholder="Phone" />

                        </div>
                        <div class="col-md-12">
                            <label></label>
                            <input type="text" class="form-control" placeholder="Email" />
                        </div>
                     
                        <div class="col-md-4 col-md-offset-4">
                           <label></label>
                            <button type="button" className=" form-control btn btn-primary btn-lg text-light">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  );
};
export default Contact;