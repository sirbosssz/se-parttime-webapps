import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from './../../firebase';

const database = firebase.database();

class ProfileView extends Component {
    constructor({ match }) {
        super();
        this.state = {
            id: match.params.id,
            profile: {},
            edit: false,
        }
    }

    componentDidMount = () => {
        let profile = {};
        database.ref('/users/' + this.state.id).once('value').then(snapshot => {
            profile = {
                en_first_name: (snapshot.val() && snapshot.val().name_eng.first_name) || '',
                en_last_name: (snapshot.val() && snapshot.val().name_eng.last_name) || '',
                th_first_name: (snapshot.val() && snapshot.val().name_thai.first_name) || '',
                th_last_name: (snapshot.val() && snapshot.val().name_thai.last_name) || '',
                email: (snapshot.val() && snapshot.val().email) || '',
                marriage: (snapshot.val() && snapshot.val().marriage) || '',
                nation: (snapshot.val() && snapshot.val().nation) || '',
                religion: (snapshot.val() && snapshot.val().religion) || '',
                desc: (snapshot.val() && snapshot.val().desc) || '',
            }
            this.setState({
                profile: profile,
            })
            // console.log(profile);
        })
    }
    handleSubmit = event => {
        let profile = this.state.profile;
        let username = this.props.user.username;
        database.ref('users/' + username).once('value').then(snapshot => {
            let newProfile = {
                username: username,
                name_eng: {
                    first_name: profile.en_first_name,
                    last_name: profile.en_last_name,
                },
                name_thai: {
                    first_name: profile.th_first_name,
                    last_name: profile.th_last_name,
                },
                email: profile.email,
                marriage: profile.marriage,
                nation: profile.nation,
                religion: profile.religion,
                desc: profile.desc,
            };
            console.log(newProfile);
            let updates = {};
            updates[username] = newProfile;
            database.ref('users/').update(updates);
            this.setState({ edit: false })
        })
        event.preventDefault();
    }

    handleInputChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name.split('.');
        const obj = name[1];
        let profile = this.state.profile;
        profile[obj] = value
        this.setState({
            profile: profile
        });
    }

    edit = () => {
        this.setState({
            edit: true,
        })
    }

    render() {
        let profile = this.state.profile;
        var editButton = null
        if (this.state.id === this.props.user.username) {
            editButton = <button onClick={this.edit} className="btn">แก้ไขโปรไฟล์</button>
        }
        const profileView = (
            <div className="container">
                <h1>ข้อมูลโปรไฟล์</h1>
                {editButton}
                <div className="row">
                    <div className="col-md-6 box">
                        <div className="innerbox">
                            <span><b>ชื่อ(ภาษาไทย)</b></span><br />
                            <span><b>ชื่อจริง: </b>{profile.th_first_name}  </span>
                            <span><b>นามสกุล: </b>{profile.th_last_name}</span>
                        </div>
                        <div className="innerbox">
                            <span><b>Name(Eng)</b></span><br />
                            <span>{profile.en_first_name}  {profile.en_last_name}</span>
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
            </div>
        )
        const profileEdit = (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <h1>แก้ไขข้อมูลโปรไฟล์</h1>
                    <input className="btn" type="submit" value="แก้ไขสำเร็จ" />
                    <div className="row">
                        <div className="col-md-6 box">
                            <div className="innerbox">
                                <span><b>ชื่อ(ภาษาไทย)</b></span><br />
                                <span><b>ชื่อจริง: </b><input onChange={this.handleInputChange} className="textinput" type="text" name="profile.th_first_name" value={this.state.profile.th_first_name} placeholder="ชื่อจริง" />  </span>
                                <span><b>นามสกุล: </b><input onChange={this.handleInputChange} className="textinput" type="text" name="profile.th_last_name" value={this.state.profile.th_last_name} placeholder="นามสกุล" /></span>
                            </div>
                            <div className="innerbox">
                                <span><b>Name(Eng)</b></span><br />
                                <span><input onChange={this.handleInputChange} className="textinput" type="text" name="profile.en_first_name" value={this.state.profile.en_first_name} placeholder="First Name" />  <input onChange={this.handleInputChange} className="textinput" type="text" name="profile.en_last_name" value={this.state.profile.en_last_name} placeholder="Last Name" /></span>
                            </div>
                        </div>
                        <div className="col-md-6 box">
                            <div className="innerbox">
                                <span><b>email: </b><input onChange={this.handleInputChange} className="textarea" type="text" name="profile.email" value={this.state.profile.email} placeholder="email@ma.il" /></span><br />
                                <span><b>สถานะการสมรส: </b><input onChange={this.handleInputChange} className="textarea" type="text" name="profile.marriage" value={this.state.profile.marriage} placeholder="สถานะการสมรส" />  </span><br />
                                <span><b>สัญชาติ: </b><input onChange={this.handleInputChange} className="textarea" type="text" name="profile.nation" value={this.state.profile.nation} placeholder="สัญชาติ" />  </span><br />
                                <span><b>ศาสนา: </b><input onChange={this.handleInputChange} className="textarea" type="text" name="profile.religion" value={this.state.profile.religion} placeholder="ศาสนา" /></span><br />
                                <p><b>ข้อมูลเพิ่มเติม: </b><textarea onChange={this.handleInputChange} className="textarea" type="text" name="profile.desc" value={this.state.profile.desc} placeholder="description คร่าวๆ" /></p>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        )
        let views = null
        if (this.state.edit) {
            views = profileEdit
        } else {
            views = profileView
        }
        return (
            <div id="profile" className="fullscreen">
                {views}
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