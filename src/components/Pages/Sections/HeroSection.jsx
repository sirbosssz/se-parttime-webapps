import React, { Component } from 'react';
import { connect } from 'react-redux';
import {popupChange} from '../../../redux.actions';

class HeroSection extends Component {

    openLoginPopup = () => {
        document.getElementById('popup').classList.remove('hide');
        this.props.popupLogin();
    }

    openRegisPopup = () => {
        document.getElementById('popup').classList.remove('hide');
        this.props.popupRegister();
    }

    render() {
        return (
            <section id="herosection-guest" className="fullscreen">
                <div>
                    <h1>HeroSection</h1>
                    <div className='button-area'>
                        <button className="login-button" onClick={this.openLoginPopup} >Login</button>
                        <button className="register-button" onClick={this.openRegisPopup} >Register</button>
                    </div>
                </div>
            </section>
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
        popupLogin: () => {
            dispatch(popupChange('login'))
        },
        popupRegister: () => {
            dispatch(popupChange('register'))
        }
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(HeroSection);