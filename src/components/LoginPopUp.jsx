import React, { Component } from 'react';
import { auth } from '../firebase';

export default class LoginPopUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isLogin: false,
            errorMessage: '',
        };
    }
    //handle eveytime login form change
    handleLoginChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }
    //handle login click
    handleLogin = event => {
        //check input
        //will do this later...
        //login
        auth.signInWithEmailAndPassword(this.state.email, this.state.password).catch(error => {
            var errorCode = error.code;
            var errorMessage = error.message;
            this.setState({
                isLogin: false,
                email: '',
                password: '',
                errorMessage: errorMessage,
            })
            console.error(errorCode + ": " + errorMessage);
        })
        this.setState({ isLogin: true })
        event.preventDefault();
        if (this.state.isLogin) {
            this.hide();
        }
    }

    hide = () => {
        document.getElementById('popup').classList.add('hide');
    }
    render() {
        return (
            <div className="fullscreen hide" id='popup'>
                <div className="popup-background fullscreen" onClick={this.hide}></div>
                <div className="popup-form">
                    <form onSubmit={this.handleLogin} id='loginForm' method='POST'>
                        <span>{this.state.errorMessage}</span>
                        <input type="text" name="email" value={this.state.email} onChange={this.handleLoginChange} placeholder='email' className='form-control' />
                        <input type="password" name="password" value={this.state.password} onChange={this.handleLoginChange} placeholder='password' className='form-control' />
                        <input type="submit" value="login" className='btn btn-primary' />

                    </form>
                </div>
            </div>
        )
    }
}