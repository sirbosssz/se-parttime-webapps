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
                    <form onSubmit={this.handleSubmit} method="post">
                        <fieldset>
                            <center><legend><h1>ประกาศรับสมัครงานพาร์ทไทม์</h1></legend></center>
                            <label>หัวข้อ </label><br /> <input className="jobcreate-input" type="text" size="35" name="title" value={this.state.title} onChange={this.handleInputChange} /><br />
                            <label>สถานที่ทำงาน </label><br /><input className="jobcreate-input" type="text" size="35" name="location" value={this.state.location} onChange={this.handleInputChange} /><br />
                            <label>เวลาทำงาน </label><br /><input className="jobcreate-input" type="text" size="35" name="time" value={this.state.time} onChange={this.handleInputChange} /><br />
                            <label>สัญญาจ้าง </label><br /><input className="jobcreate-input-num" type="number" name="duration" value={this.state.duration} onChange={this.handleInputChange} /> <label>เดือน</label><br />
                            <label>รายละเอียด </label><br />
                            <textarea className="jobcreate-input" name="desc" rows="4" cols="40" value={this.state.desc} onChange={this.handleInputChange} />
                            <div className="top-fixed">
                                <Link to={`/`}>
                                    <button className="btn">ยกเลิก</button>
                                </Link>
                                <input className="btn" type="submit" value="ยืนยัน" />
                            </div>
                        </fieldset>
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