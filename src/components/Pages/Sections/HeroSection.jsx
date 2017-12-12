import React, { Component } from 'react';
import { connect } from 'react-redux';
import { popupChange } from '../../../redux.actions';

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
            <section id="herosection-guest" className="herofull">
                <div className="herofull background"></div>
                <div className="herocontainer">
                    <h1>ชุมชนคนตังค์น้อย</h1>
                    <h2>ค้นหางาน part time ที่เหมาะสมกับคุณ</h2>
                    <div className='button-area'>
                        <button className="btn login-button" onClick={this.openLoginPopup} >เข้าสู่ระบบ</button>
                        <button className="btn register-button" onClick={this.openRegisPopup} >สมัครสมาชิก</button>
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