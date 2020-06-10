import React, {Component} from 'react'

export class Register extends Component {
    render() {
        return (
            <div className="login-box">
                <div className=" text-center">
                    <h2 className="margin-top-0 text-light headers">
                        <i className="fas fa-caret-left"></i>&nbsp; Register &nbsp;<i className="fas fa-caret-right"></i>
                    </h2>
                    <hr className="light"/>
                </div>
                <form>

                    <div className="user-box">
                        <input type="text" name="" required=""/>
                        <label>Email</label>
                    </div>
                    <div className="user-box">
                        <input type="password" name="" required=""/>
                        <label>Password</label>
                    </div>
                    <div className="user-box">
                        <input type="password" name="" required=""/>
                        <label>Confirm Password</label>
                    </div>
                    <div className="user-box">
                        <input type="text" name="" required=""/>
                        <label>Username</label>
                    </div>
                    <div className="switchlabel">
                        <a href="/login">
                            Already Registered?
                        </a>

                    </div>
                    <div className="signup">
                        <a href="/">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Sign up
                        </a>
                    </div>

                </form>
            </div>

        )
    }
}

export default Register
