import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import firebase from './../../firebase';

var database = firebase.database();
class JobRegisterForm extends Component {
    constructor({ match }) {
        super();
        this.state = {
            username: match.params.id,
            post: match.params.post,
        }
    }
    componentDidMount = () => {
        let accepted = []
        database.ref('posts/' + this.state.post).once('value').then(snapshot => {
            accepted = (snapshot.val() && snapshot.val().accepted_user) || [];
            let duplicate = false
            for (let index = 0; index < accepted.length; index++) {
                if (accepted[index] === this.state.username) {
                    duplicate = true
                    console.log('prevent duplicate')
                }
            }
            if (!duplicate) {
                accepted.push(this.state.username);
                //update to db
                let updates = {};
                updates[this.state.post + '/accepted_user'] = accepted;
                // console.log(updates)
                database.ref('posts/').update(updates)
            }
        })
        alert('ยอมรับผู้สมัคร ' + this.state.username);
    }

    render() {
        return (
            <section id="RegisterForm">
                <Redirect to="/" />
            </section>
        )
    }
}
export default JobRegisterForm;