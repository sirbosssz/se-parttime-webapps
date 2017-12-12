import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import firebase from '../../firebase';

class JobCreate extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            location: '',
            time: '',
            duration: '',
            desc: '',
            complete: false,
        }
    }

    handleInputChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value,
        })
    }

    handleSubmit = event => {
        let title = this.state.title,
            createdUser = this.props.user.username,
            location = this.state.location,
            time = this.state.time,
            duration = this.state.duration,
            desc = this.state.desc;
        this.writeNewPost(createdUser, title, location, time, duration, desc)
        event.preventDefault();
    }

    writeNewPost = (user, title, location, time, duration, desc) => {
        let postKey = firebase.database().ref().child('posts').push().key;
        let postdata = {
            owner: user,
            title: title,
            post_key: postKey,
            desc: desc,
            work_time: time,
            duration: duration,
            location: location,
            registerd_user: [],
        }
        firebase.database().ref('posts/' + postKey).set(postdata);
        console.log('new post' + postKey);
        this.setState({ complete: true });
    }

    render() {
        let redirect = null;
        if (this.state.complete) {
            redirect = <Redirect to="/" />
        }
        return (
            <section id="jobcreate">
                {redirect}
                <div className="container">
                    <h1>ประกาศรับสมัครงานพาร์ทไทม์</h1>
                    <form onSubmit={this.handleSubmit} method="post">
                        หัวข้อ <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange} /> <br />
                        สถานที่ทำงาน <input type="text" name="location" value={this.state.location} onChange={this.handleInputChange} /> <br />
                        เวลาทำงาน <input type="text" name="time" value={this.state.time} onChange={this.handleInputChange} /> <br />
                        สัญญาจ้าง <input type="number" name="duration" value={this.state.duration} onChange={this.handleInputChange} min="0" /> เดือน <br />
                        รายละเอียด <textarea name="desc" value={this.state.desc} onChange={this.handleInputChange} /> <br />
                        <div className="top-fixed">
                            <Link to={`/`}>
                                <button className="btn">ยกเลิก</button>
                            </Link>
                            <input className="btn" type="submit" value="ยืนยัน" />
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

const mapStatetoProps = state => {
    return {
        user: state.user,
    }
}

export default connect(mapStatetoProps)(JobCreate)