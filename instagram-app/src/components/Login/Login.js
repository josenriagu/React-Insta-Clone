import React, { Component } from 'react';
import './Login.css';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }
    changeHandler = event => {
        this.setState({ ...this.state, username: event.target.value })
    }
    login = () => {
        localStorage.setItem("username", JSON.stringify(this.state.username));
        window.location.reload();
    }
    render() {
        return (
            <div className="login">
                <div className="login-image">
                    <img
                        src="/img/icons/instagram_logo_big.png"
                        alt="logo"
                    />
                </div>
                <form className="form-login" onSubmit={this.login}>
                    <div className="field">
                        <input
                            type="text"
                            onChange={(event) => this.changeHandler(event)}
                            placeholder="Phone number, username, or email"
                            required
                        />
                    </div>
                    <div className="field">
                        <input
                            type="password"
                            placeholder="Password"
                            required
                        />
                    </div>
                    <p>Forgot password?</p>
                    <button
                        type="submit">Log In</button>
                </form>
                <div className="separator">
                    <div className="empty"></div>
                    <div className="or">OR</div>
                    <div className="empty"></div>
                </div>
                <div className="facebook">
                    <div className="fb-logo">
                        <img
                            src="/img/icons/facebook.png"
                            alt="facebook logo"
                        />
                    </div>
                    <p><strong>Log in with Facebook</strong></p>
                </div>
            </div>
        );
    }
}