import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from './../../../firebase';

const database = firebase.database();
class JobCard extends Component {
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
                console.log(updates)
                database.ref('posts/').update(updates)
            }
        })

    }

    render() {
        let button = null;
        if (this.props.user.username === this.props.job.owner) {
            button = (<button>ดูรายชื่อผู้สมัคร</button>)
        } else {
            button = (<button onClick={this.register}>สมัคร</button>)
        }
        return (
            <section id="jobcard">
                <span>{this.props.job.title} </span>
                <span>- {this.props.job.location}</span><br />
                <span>เวลาทำงาน: {this.props.job.work_time}</span> <br />
                <span>สัญญาจ้าง: {this.props.job.duration}</span> เดือน <br />
                <span>รายละเอียด: <br />{this.props.job.desc}</span> <br />
                {button}
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