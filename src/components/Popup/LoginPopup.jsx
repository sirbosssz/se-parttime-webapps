import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from './../../firebase';

var database = firebase.database();
var auth = firebase.auth();

class LoginPopup extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            error: '',
        }
    }

    login = (email, password) => {
        console.log('%c Logging in ... ' + email, 'color:red');
        auth.signInWithEmailAndPassword(email, password).catch(error => {
            let errorCode = error.code;
            let errorMessage = error.message;
            this.setState({
                error: errorMessage
            })
            console.error(errorCode + errorMessage);
        })
        if (!this.state.error) {
            // close popup
            document.getElementById('popup').classList.add('hide');
            this.props.popupClose();
        }
    }

    handleSubmit = event => {
        this.setState({
            error: ''
        })
        //check username type
        let username_type;
        if (this.state.username.includes('@')) {
            username_type = 'EMAIL';
            this.login(this.state.username, this.state.password);
        } else {
            username_type = 'USERNAME';

            database.ref('/users/' + this.state.username).once('value').then(snapshot => {
                let email = (snapshot.val() && snapshot.val().email) || null;
                console.log(email);
                if (email) {
                    this.login(email, this.state.password)
                } else {
                    let error = 'username wrong'
                    this.setState({ error: error })
                }

            });
        }
        console.log('%c logging in with ' + username_type, "color: blue; font-size: 16pt;");


        event.preventDefault();
    }

    handleInputChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value,
        })
    }

    render() {
        return (
            <div className="login-container">
                <h1>
                    Login
                </h1>
                <form method='POST' onSubmit={this.handleSubmit}>
                    <input className='textinput' type="text" name="username" placeholder="username or email" value={this.state.username} onChange={this.handleInputChange} />
                    <input className='textinput' type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleInputChange} />
                    <input className='buttoninput' type="submit" value="Login" />
                </form>
            </div>
        )
    }
}

const mapStatetoProps = state => {
    return {
        popup: state.popup,
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        popupClose: () => {
            dispatch({
                type: 'POPUP',
                payload: '',
            })
        },
        addUser: username => {
            dispatch({
                type: 'USER',
                payload: username
            })
        }
    }
}


export default connect(mapStatetoProps, mapDispatchtoProps)(LoginPopup);