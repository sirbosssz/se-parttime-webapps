import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    HomeIcon,
    NotifyIcon,
    ProfileIcon,
    MenuDesktopIcon,
} from './NavIcon/';

class NavMenuTop extends Component {
    render() {
        return (
            <div>
                <ProfileIcon />
                <HomeIcon />
                {/* <NotifyIcon /> */}
                <MenuDesktopIcon />
            </div>
        )
    }
}

export default (NavMenuTop)