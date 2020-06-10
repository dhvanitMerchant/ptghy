import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import * as emailjs from 'emailjs-com'

/***********************
  Contact Component
 ***********************/

class Contact extends Component {
  state = {
		name: '',
		number: '',
    email: '',
  }
  handleSubmit(e) {
		e.preventDefault()
		const {name, number, email} = this.state
		let templateParams = {
			from_name: name,
			from_number: number,
			from_email: email,
			to_name: 'Kunal',
		}
		emailjs.send(
			'gmail',
			'template_8grhnJRh',
			templateParams,
			'user_LZpCELjZBVGE1nvhqLa6I'
		).then((response) => {
			ReactDOM.render(<div className="alert alert-success">
			<strong>Success! </strong>Your message has been sent successfully.</div>, document.getElementById('success'));
			},
			(error) => {
				console.log("error");
			}
		)
		this.resetForm()
  }

  resetForm() {
    this.setState({
			name: '',
			number: '',
      email: '',
    })
  }
  handleChange = (param, e) => {
		this.setState({ [param]: e.target.value })
	}

	render() {
		return (
			<section id="contact" className="text-light bg-dark">
        <div className="container ">
            <div className="row ">
							<div className="col-lg-8 col-lg-offset-2 text-center">
							<h2 className="margin-top-0 text-light headers">
								<i className="fas fa-caret-left"></i>&nbsp; Get in Touch &nbsp;<i className="fas fa-caret-right"></i>
							</h2>
								<hr className="light"/>
							</div>
							<div className="col-lg-10 col-lg-offset-1 text-center">
							<div id="success" className="p-3"></div>
								<form className="contact-form row" onSubmit={this.handleSubmit.bind(this)}>
									<div className="col-md-6">
										<label></label>
										<input type="text" className="form-control" value={this.state.name} onChange={this.handleChange.bind(this, 'name')} placeholder="Name" required/>
									</div>
									<div className="col-md-6">
										<label></label>
										<input type="text" className="form-control" value={this.state.number} onChange={this.handleChange.bind(this, 'number')} placeholder="Phone" />
									</div>
									<div className="col-md-12">
										<label></label>
										<input type="text" className="form-control" value={this.state.email} onChange={this.handleChange.bind(this, 'email')} placeholder="Email" />
									</div>
									<div className="col-md-4 col-md-offset-4">
										<label></label>
										<button type="submit" id="submit" value="submit" className=" form-control btn btn-primary btn-lg text-light">Send</button>
									</div>
                </form>
              </div>
            </div>
        	</div>
    	</section>
		);
	}
};
export default Contact;