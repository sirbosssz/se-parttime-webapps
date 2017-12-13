import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import {
    HomeGuest,
    HomeUser,
    RegisFill,
    JobCreate,
    ProfileView,
    JobRegisterForm,
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
                    page = <Route exact path="/" component={HomeGuest} />
                } else {
                    page = <Route exact path="/" component={HomeUser} />
                }
                break;
            case 'Regis':
                page = <Route path="/" component={RegisFill} />
                break;
            default:
                page = <Route exact path="/" component={HomeGuest} />

                break;
        }
        return (
            <Router>
                <div>
                    {page}
                    <Route path="/create" component={JobCreate} />
                    <Route path="/user=:id" component={ProfileView} />
                    <Route path="/post=:post&user=:id" component={JobRegisterForm} />
                </div>
            </Router>
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