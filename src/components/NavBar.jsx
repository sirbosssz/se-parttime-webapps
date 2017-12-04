import React, { Component } from 'react';
import { auth } from '../firebase';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
        }
    }
    // keep user data when refresh
    componentDidMount = () => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user })
            }
        })
    }

    logout = () => {
        auth.signOut().then(() => {
            this.setState({
                user: null,
            })
        })
    }

    openLoginForm = () => {
        document.getElementById('popup').classList.remove('hide')
    }

    render() {
        return (
            <div className='navbar'>
                <span>Navbar</span>
                {!this.state.user ? ( //if not login
                    <div>
                        <button className='btn btn-dark' onClick={this.openLoginForm}>Login</button>
                        <button className='btn btn-dark'>Register</button>
                    </div>
                ) : ( //if logged in
                        <div>
                            <span>Hello {this.state.user.email} </span>
                            <button className='btn btn-dark' onClick={this.logout}>Logout</button>
                        </div>
                    )}
            </div>
        )
    }
}



export default NavBar;