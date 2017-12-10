import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    LoginPopup,
    RegisterPopup,
} from './Popup/';

class PagePopup extends Component {
    constructor() {
        super();
        this.state = {
            popup: '',
        };
    }

    componentDidMount = () => {
        this.update = setInterval(() => {
            this.setState({
                popup: this.props.popup
            })
        }, 1000/30)
    }

    componentWillUnmount = () => {
        clearInterval(this.update);
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

    closePopup = () => {
        document.getElementById('popup').classList.add('hide');
        this.props.popupClose();
    }

    render() {
        return (
            <div id="popup" className="popup hide">
                <div className="popup-background" onClick={this.closePopup}></div>
                <div className="popup-inner login-popup">
                    {this.checkPopup()}
                </div>
            </div>
        )
    }
}

const mapStatetoProps = state => {
    return {
        popup: state.popup,
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        popupClose: () => {
            dispatch({
                type: 'POPUP',
                payload: '',
            })
        }
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(PagePopup);