import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from './firebase';
import {
    NavBar,
    PageContainer,
    Footer,
    PagePopup,
} from './components'

const auth = firebase.auth();
const database = firebase.database();

class App extends Component {
    componentDidMount = () => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                database.ref('/users/').once('value', snapshot => {
                    snapshot.forEach(childSnapshot => {
                        if (user.email === childSnapshot.val().email) {
                            this.props.addUser({
                                username: childSnapshot.val().username,
                                email: childSnapshot.val().email,
                                name_thai: {
                                    first_name: childSnapshot.val().name_thai.first_name,
                                    last_name: childSnapshot.val().name_thai.last_name
                                },
                                name_eng: {
                                    first_name: childSnapshot.val().name_eng.first_name,
                                    last_name: childSnapshot.val().name_eng.last_name
                                }
                            })
                        }
                    })
                })
            }
        })
    }

    render() {
        return (
            <div>
                <PagePopup />
                <NavBar />
                <PageContainer />
                <Footer />
            </div>
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
        addUser: username => {
            dispatch({
                type: 'USER',
                payload: username
            })
        }
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(App)