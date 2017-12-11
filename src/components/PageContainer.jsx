import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    HomeGuest,
    HomeUser,
    RegisFill,
} from './Pages';

class PageContainer extends Component {
    constructor() {
        super();
        this.state = {
            pages: 'HomeGuest'
        }
    }
    componentDidMount = () => {

    }

    render() {
        let page = null;
        switch (this.props.page) {
            case 'Home':
                if (Object.keys(this.props.user).length === 0) {
                    page = <HomeGuest />
                } else {
                    page = <HomeUser />
                }
                break;
            case 'Regis':
                page = <RegisFill />
                break;
            default:
                page = <HomeGuest />
                break;
        }
        return (
            <div>
                {page}
            </div>
        )
    }
}
const mapStatetoProps = state => {
    return {
        page: state.page,
        user: state.user,
    }
}

export default connect(mapStatetoProps)(PageContainer);