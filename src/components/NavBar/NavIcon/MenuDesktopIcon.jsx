import React, { Component } from 'react';

export default class MenuDesktopIcon extends Component {
    render() {
        return(
            <span className="menu-item">
                <span>Menu </span>
                <i className="fas fa-chevron-circle-down"></i>
            </span>
        )
    }
}