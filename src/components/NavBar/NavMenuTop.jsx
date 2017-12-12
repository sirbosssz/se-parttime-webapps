import React, { Component } from 'react';

import { 
    HomeIcon,
    NotifyIcon,
    ProfileIcon,
    MenuDesktopIcon,
} from './NavIcon/';

export default class NavMenuTop extends Component {
    render() {
        return (
            <div>
                <ProfileIcon />
                <HomeIcon />
                <NotifyIcon />
                <MenuDesktopIcon />
            </div>
        )
    }
}