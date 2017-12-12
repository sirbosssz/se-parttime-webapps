import React, { Component } from 'react';
import firebase from './../firebase';

import {
    NavLogo,
    NavUserMenu,
} from './NavBar/';

export default class NavBar extends Component {
    constructor() {
        super()
        this.state = {
            navClass: 'navbar'
        }
    }
    componentDidMount = () => {
        this.update = setInterval(() => {
            let navClass = 'navbar'
            if (firebase.auth().currentUser) {
                navClass = 'navbar bg'
            } else {
                navClass = 'navbar'
            }
            this.setState({
                navClass: navClass
            })
        }, 500)
    }

    componentWillUnmount = () => {
        clearInterval(this.update)
    }
    render() {


        return (
            <nav className={this.state.navClass}>
                <NavLogo />
                <NavUserMenu />
            </nav>
        )
    }
}