import React, { Component } from 'react';
import { connect } from 'react-redux';

import HomeGuest from './HomeGuest';
import HomeUser from './HomeUser';

class Home extends Component {
    render() {
        let page = null
        if (Object.keys(this.props.user).length === 0) {
            page = <HomeGuest />
        } else {
            page = <HomeUser />
        }
        return (
            { page }
        )
    }
}
const mapStatetoProps = state => {
    return {
        page: state.page,
        user: state.user,
    }
}

export default connect(mapStatetoProps)(Home);