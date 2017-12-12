import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from './../../firebase';

const database = firebase.database();

class ProfileView extends Component {
    constructor({ match }) {
        super();
        this.state = {
            id: match.params.id,
            profile: {}
        }
    }

    componentDidMount = () => {
        this.update = setInterval(() => {
            let profile = {};
            database.ref('/users/' + this.state.id).once('value').then(snapshot => {
                profile = {
                    name_eng: (((snapshot.val() && snapshot.val().name_eng.first_name) || '') + ' ' + ((snapshot.val() && snapshot.val().name_eng.last_name) || '')),
                    first_name: (snapshot.val() && snapshot.val().name_thai.first_name) || '',
                    last_name: (snapshot.val() && snapshot.val().name_thai.last_name) || '',
                    email: (snapshot.val() && snapshot.val().email) || '',
                    marriage: (snapshot.val() && snapshot.val().marriage) || '',
                    nation: (snapshot.val() && snapshot.val().nation) || '',
                    religion: (snapshot.val() && snapshot.val().religion) || '',
                    desc: (snapshot.val() && snapshot.val().desc) || '',
                }
                this.setState({
                    profile: profile,
                })
                console.log(profile);
            })
        }, 1000)
    }

    componentWillUnmount = () => {
        clearInterval(this.update)
    }

    render() {
        let profile = this.state.profile;
        var editButton = null
        if (this.state.id === this.props.user.username) {
            editButton = <button className="btn">แก้ไขโปรไฟล์</button>
        }

        return (
            <div id="profile" className="fullscreen">
                <div className="container">
                    <h1>ข้อมูลโปรไฟล์</h1>
                    <div className="row">
                        <div className="col-md-6 box">
                            <div className="innerbox">
                                <span><b>ชื่อ(ภาษาไทย)</b></span><br />
                                <span><b>ชื่อจริง: </b>{profile.first_name}  </span>
                                <span><b>นามสกุล: </b>{profile.last_name}</span>
                            </div>
                            <div className="innerbox">
                                <span><b>Name(Eng)</b></span><br />
                                <span>{profile.name_eng}</span>
                            </div>
                        </div>
                        <div className="col-md-6 box">
                            <div className="innerbox">
                                <span><b>email: </b>{profile.email}</span><br />
                                <span><b>สถานะการแต่งงาน: </b>{profile.marriage}  </span><br />
                                <span><b>สัญชาติ: </b>{profile.nation}  </span><br />
                                <span><b>ศาสนา: </b>{profile.religion}</span><br />
                                <p><b>ข้อมูลเพิ่มเติม: </b>{profile.desc}</p>
                            </div>
                        </div>
                    </div>
                    {editButton}
                </div>
            </div>
        )
    }
}

const mapStatetoProps = state => {
    return {
        user: state.user,
    }
}

export default connect(mapStatetoProps)(ProfileView)