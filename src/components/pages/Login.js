import React, {Component} from 'react'
import '../../components/App.css';
import '../../components/Responsive.css'
import '../../components/App.scss';
import {Link} from 'react-router-dom'

export class login extends Component {
    render() {
        return (
                <div class="login-box">
                    <div class=" text-center">
                        <h2 className="margin-top-0 text-light headers">
                            <i class="fas fa-caret-left"></i>&nbsp; Login &nbsp;<i class="fas fa-caret-right"></i>
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

                        <div className="signup">
                            <a href="/">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Login in
                            </a>
                        </div>
                        <div className="switchlabel">
                            <Link to="/register">
                                Create Account
                            </Link>

                        </div>
                    </form>
                </div>

        )
    }
}

export default login;