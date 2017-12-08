import React, { Component } from 'react';
import { auth } from '../firebase';

export default class LoginPopUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errorMessage: '',
            isLogin: false,
            button: 'Login',
        };
    }
    componentDidMount = () => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({ isLogin: true })
                this.hide()
            } else {
                this.setState({ isLogin: false })
            }
        })
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
        this.setState({button: 'logging in...'})
        auth.signInWithEmailAndPassword(this.state.email, this.state.password).catch(error => {
            var errorCode = error.code;
            var errorMessage = error.message;
            this.setState({
                errorMessage: 'Can\'t Login: ' + errorMessage,
                button: 'Login'
            })
            console.error(errorCode + ": " + errorMessage);
        })
        this.setState({
            email: '',
            password: '',
        })
        if (this.state.isLogin) {
            
            this.hide();
            this.setState({button: 'Login'});
        }
        event.preventDefault();
    }

    hide = () => {
        document.getElementById('popup').classList.add('hide');
        this.setState({
            errorMessage: "",
        })
    }
    render() {
        return (
            <div className="fullscreen hide" id='popup'>
                <div className="popup-background fullscreen"></div>
                <div className="popup-form">
                    <form onSubmit={this.handleLogin} id='loginForm' method='POST'>
                        {this.state.errorMessage &&
                            <span className='error'>{this.state.errorMessage}</span>
                        }
                        <input type="text" name="email" value={this.state.email} onChange={this.handleLoginChange} placeholder='email' className='form-control' />
                        <input type="password" name="password" value={this.state.password} onChange={this.handleLoginChange} placeholder='password' className='form-control' />
                        <input type="submit" value={this.state.button} className='btn btn-primary' />

                    </form>
                </div>
            </div>
        )
    }
}