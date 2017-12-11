import React, { Component } from 'react';
import { connect } from 'react-redux';
// import firebase from '../../firebase';

class RegisFill extends Component {
    render() {
        return(
            <h1>Regis</h1>
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
        changePage: pageName => {
            dispatch({
                type: 'PAGE',
                payload: pageName,
            })
        }
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(RegisFill);