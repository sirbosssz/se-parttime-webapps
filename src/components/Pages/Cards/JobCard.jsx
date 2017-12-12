import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from './../../../firebase';

const database = firebase.database();
class JobCard extends Component {
    constructor() {
        super();
        this.state = {
            registered: [],
            error: '',
        }
    }
    register = () => {
        console.log(this.props.user.username + ' register new job');
        let registered = []
        database.ref('posts/' + this.props.job.post_key).once('value').then(snapshot => {
            registered = (snapshot.val() && snapshot.val().registered_user) || [];
            let duplicate = false
            for (let index = 0; index < registered.length; index++) {
                if (registered[index] === this.props.user.username) {
                    duplicate = true
                    console.log('prevent duplicate')
                }
            }
            if (!duplicate) {
                registered.push(this.props.user.username);
                //update to db
                let updates = {};
                updates[this.props.job.post_key + '/registered_user'] = registered;
                // console.log(updates)
                database.ref('posts/').update(updates)
            }
        })

    }

    viewRegister = () => {
        console.log('view registered')
        let registered = []
        let newRegistered = []
        database.ref('posts/' + this.props.job.post_key).once('value').then(snapshot => {
            registered = (snapshot.val() && snapshot.val().registered_user) || [];
            console.log('registerd ' + registered)
            registered.forEach(element => {
                database.ref('users/' + element).once('value').then(snapshot => {
                    let user = {
                        username: snapshot.val().username,
                        first_name: snapshot.val().name_thai.first_name,
                        last_name: snapshot.val().name_thai.last_name,
                        email: snapshot.val().email,
                    }
                    newRegistered.push(user)
                    this.setState({
                        registered: newRegistered,
                        error: ''
                    })
                })
            });
        });
        if (this.state.registered.length === 0) {
            this.setState({
                error: 'ยังไม่มีผู้สมัครในตอนนี้'
            })
        }
    }

    render() {
        let button = null;
        if (this.props.user.username === this.props.job.owner) {
            button = (<button onClick={this.viewRegister}>ดูรายชื่อผู้สมัคร</button>)
        } else {
            button = (<button onClick={this.register}>สมัคร</button>)
        }

        var registered = [];
        this.state.registered.forEach(items => {
            let item = <li>ชื่อ:{items.first_name} {items.last_name}, email:{items.email}</li>
            registered.push(item)
        })
        if (this.state.error) {
            registered = <span>ยังไม่มีผู้สมัครในตอนนี้</span>
        }
        return (
            <section id="jobcard">
                <span>{this.props.job.title} </span>
                <span>- {this.props.job.location}</span><br />
                <span>เวลาทำงาน: {this.props.job.work_time}</span> <br />
                <span>สัญญาจ้าง: {this.props.job.duration}</span> เดือน <br />
                <span>รายละเอียด: <br />{this.props.job.desc}</span> <br />
                {button}
                <ul>
                    {registered}
                </ul>
            </section>
        )
    }
}

const mapStatetoProps = state => {
    return {
        user: state.user,
    }
}

export default connect(mapStatetoProps)(JobCard)