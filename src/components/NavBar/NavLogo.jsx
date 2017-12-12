import React, { Component } from 'react';
import { connect } from 'react-redux';

class NavLogo extends Component {
    constructor() {
        super();
        this.state = {
            image: null
        }
    }

    componentDidMount = () => {
        this.update = setInterval(() => {
            if (Object.keys(this.props.user).length !== 0) {
                //if has user
                this.setState({
                    image: <img src="images/logo2.png" alt="Logo" className="navlogo" />
                })
            } else {
                this.setState({
                    image: <img src="images/logo2.png" alt="Logo" className="navlogo" />
                })
            }
        }, 500)
    }
    componentWillUnmount = () => {
        clearInterval(this.update);
    }

    render() {
        return (
            <a href="/">{this.state.image}</a>
        )
    }
}
const mapStatetoProps = state => {
    return {
        user: state.user,
    }
}

export default connect(mapStatetoProps)(NavLogo)