import React, { Component } from 'react';
import firebase, { auth } from '../firebase';



export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            fullname: '',
        }
    }
    // keep user data when refresh
    componentDidMount = () => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user })
                firebase.database().ref('/users/').once('value', snapshot => {
                    let found = false
                    snapshot.forEach(childSnapshot => {
                        if (childSnapshot.val().email === this.state.user.email) {
                            found = true
                            this.setState({
                                fullname: childSnapshot.val().name_thai.first_name + " " + childSnapshot.val().name_thai.last_name
                            })
                        }
                    })
                    if (!found) {
                        this.setState({
                            fullname: 'no-fullname',
                        })
                    }
                })
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
                            <span>ยินดีต้อนรับ คุณ{this.state.fullname} </span>
                            <button className='btn btn-dark' onClick={this.logout}>Logout</button>
                        </div>
                    )}
            </div>
        )
    }
}