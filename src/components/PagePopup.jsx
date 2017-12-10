import React, { Component } from 'react';

import {
    LoginPopup,
    RegisterPopup,
} from './Popup/';

export default class PagePopup extends Component {
    constructor() {
        super();
        this.state = {
            popup: 'login',
        };
    }

    checkPopup = () => {
        switch (this.state.popup) {
            case "login":
                return <LoginPopup />
            case "register":
                return <RegisterPopup />
            default:
                return null
        }
    }

    render() {
        return (
            <div id="popup" className="popup hide">
                <div className="popup-background"></div>
                <div className="popup-inner login-popup">
                    {this.checkPopup()}
                </div>
            </div>
        )
    }
}