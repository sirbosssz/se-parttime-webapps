import React, { Component } from 'react';

import NavMenuTop from './NavMenuTop';

export default class NavUserMenu extends Component {
    constructor() {
        super();
        this.state = {
            isUser: false,
        }
    }
    render() {
        return (
            <div className="usermenu">
                {this.state.isUser && <NavMenuTop />}
            </div>
        )
    }
}