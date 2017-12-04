import React, { Component } from 'react';
import { auth, googleProvider } from '../firebase';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            user: null,
        }
    }
    componentDidMount = () => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user })
            }
        })
    }
    login = () => {
        auth.signInWithPopup(googleProvider).then((result) => {
            const user = result.user;
            this.setState({
                user
            })
        })

    }

    logout = () => {
        auth.signOut().then(() => {
            this.setState({
                user: null,
            })
        })
    }

    render() {
        return (
            <div className='navbar'>
                <span>Navbar</span>
                {!this.state.user ? ( //if not login
                    <div>
                        <button onClick={this.login}>Login</button>
                        <button>Register</button>
                    </div>
                ) : ( //if logged in
                        <div>
                            <span>Hello {this.state.user.displayName} </span>
                            <button onClick={this.logout}>Logout</button>
                        </div>
                    )}
            </div>
        )
    }
}


export default NavBar;