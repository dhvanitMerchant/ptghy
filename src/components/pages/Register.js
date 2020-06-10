import React, {Component} from 'react'

export class Register extends Component {
    render() {
        return (
            <div class="login-box">
                <div class=" text-center">
                    <h2 className="margin-top-0 text-light headers">
                        <i class="fas fa-caret-left"></i>&nbsp; Register &nbsp;<i class="fas fa-caret-right"></i>
                    </h2>
                    <hr class="light"/>
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
