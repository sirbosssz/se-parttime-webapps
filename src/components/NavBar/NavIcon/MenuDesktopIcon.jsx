import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from './../../../firebase';

class MenuDesktopIcon extends Component {
    dropMenu = () => {
        document.getElementById('dropmenu').classList.toggle('hide')
    }

    logout = () => {
        firebase.auth().signOut();
        this.props.removeUser();
        if (this.props.page === 'Regis') {
            this.props.changePage('Home');
        }
    }

    render() {
        return (
            <span className="menu-item icon">
                <div className="dropdown" onClick={this.dropMenu}>
                    {/* <span>เมนู </span> */}
                    <i className="fas fa-chevron-circle-down"></i>
                </div>
                <div id="dropmenu" className="hide">
                    <span>เมนู</span>
                    <span className="link">ตั้งค่า</span>
                    <span className="link" onClick={this.logout}>ออกจากระบบ</span>
                </div>
            </span>
        )
    }
}
const mapStatetoProps = state => {
    return {
        user: state.user,
        page: state.page,
    }
}
const mapDispatchtoProps = dispatch => {
    return {
        removeUser: () => {
            dispatch({
                type: 'USER',
                payload: {}
            })
        },
        changePage: pageName => {
            dispatch({
                type: 'PAGE',
                payload: pageName,
            })
        }
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(MenuDesktopIcon)