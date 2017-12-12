import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProfileIcon extends Component {
    constructor() {
        super();
        this.state = {
            fullname: 'ยังไม่ได้กรอกข้อมูลสมัครสมาชิก',
            image: ""
        }
    }

    componentDidMount = () => {
        this.update = setInterval(() => {
            if (Object.keys(this.props.user).length !== 0) {
                this.setState({
                    fullname: this.props.user.name_thai.first_name + " " + this.props.user.name_thai.last_name,
                    image: <img src="profile.jpg" alt='profile.jpg' className="profile-picture"/>
                })
            } else {
                this.setState({
                    image: ''
                })
            }
        }, 500);
    }

    componentWillUnmount = () => {
        clearInterval(this.update)
    }

    render() {
        return (
            <span className="menu-item">
                <span>{this.state.fullname}</span>
                {this.state.image}
            </span>

        )
    }
}

const mapStatetoProps = state => {
    return {
        user: state.user,
    }
}

export default connect(mapStatetoProps)(ProfileIcon)