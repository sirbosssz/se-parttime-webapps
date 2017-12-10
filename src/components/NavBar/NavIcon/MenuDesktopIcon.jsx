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
    }

    render() {
        return (
            <span className="menu-item">
                <div className="dropdown" onClick={this.dropMenu}>
                    <span>Menu </span>
                    <i className="fas fa-chevron-circle-down"></i>
                </div>
                <div id="dropmenu" className="hide">
                    <span>ตั้งค่า</span>
                    <span onClick={this.logout}>ออกจากระบบ</span>
                </div>
            </span>
        )
    }
}
const mapStatetoProps = state => {
    return {
        user: state.user,
    }
}
const mapDispatchtoProps = dispatch => {
    return {
        removeUser: () => {
            dispatch({
                type: 'USER',
                payload: {}
            })
        }
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(MenuDesktopIcon)