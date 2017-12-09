import React, { Component } from 'react';

import {
    NavLogo,
    NavUserMenu,
} from './NavBar/';

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar">
                <NavLogo />
                <NavUserMenu />
            </nav>
        )
    }
}