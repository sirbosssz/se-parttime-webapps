import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProfileIcon extends Component {
    constructor() {
        super();
        this.state = {
            fullname: 'fullname',
        }
    }

    componentDidMount = () => {
        this.update = setInterval(() => {
            if (Object.keys(this.props.user).length !== 0) {
                this.setState({
                    fullname: this.props.user.name_thai.first_name + " " + this.props.user.name_thai.last_name
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
                <img src="" alt="Profile Icon" />
                <span>{this.state.fullname}</span>
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