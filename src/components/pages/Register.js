import React, {Component} from 'react'
import {Link} from 'react-router-dom'


export class Register extends Component {
    render() {
        return (
            <div class="login-box">
                <div class=" text-center">
                    <h2 className="margin-top-0 text-light headers">
                        <i class="fas fa-caret-left"></i>&nbsp; Register &nbsp;<i class="fas fa-caret-right"></i>
                    </h2>
                    <hr class="light"/>
                    <span></span>
                    <span></span>
                    <span></span>
                            <span></span>
                </div>
                <form>

                    <div class="user-box">
                        <input type="text" name="" required=""/>
                        <label>Email</label>
                    </div>
                    <div class="user-box">
                        <input type="password" name="" required=""/>
                        <label>Password</label>
                    </div>
                    <div class="user-box">
                        <input type="password" name="" required=""/>
                        <label>Confirm Password</label>
                    </div>
                    <div class="user-box">
                        <input type="text" name="" required=""/>
                        <label>Username</label>
                    </div>
                   
                    <div className="signup">
                        <Link href="/">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Sign up
                        </Link>
                    </div>
                    <div className="switchlabel">
                        <Link to="/login">
                            Already Registered?
                        </Link>

                    </div>

                </form>
            </div>

        )
    }
}

export default Register
