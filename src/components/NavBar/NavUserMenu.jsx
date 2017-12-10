import React, { Component } from 'react';
import firebase from './../../firebase';
import NavMenuTop from './NavMenuTop';

export default class NavUserMenu extends Component {
    constructor() {
        super();
        this.state = {
            isUser: false,
        }
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    isUser: true
                })
            } else {
                this.setState({
                    isUser: false
                })
            }
        })
    }
    render() {
        return (
            <div className="usermenu">
                {this.state.isUser && <NavMenuTop />}
            </div>
        )
    }
}
