import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from '../../firebase';

const database = firebase.database();
const auth = firebase.auth();

class RegisFill extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            th_prefix: '',
            th_fname: '',
            th_lname: '',
            en_fname: '',
            en_lname: '',
            marriage: '',
            nation: '',
            religion: '',
            birthday: '',
            profileImg: '',
            desc: '',
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
        let username = this.state.username,
            th_prefix = this.state.th_prefix,
            th_fname = this.state.th_fname,
            th_lname = this.state.th_lname,
            en_fname = this.state.en_fname,
            en_lname = this.state.en_lname,
            marriage = this.state.marriage,
            nation = this.state.nation,
            religion = this.state.religion,
            birthday = this.state.birthday,
            // profileImg = this.state.profileImg,
            desc = this.state.desc;

        if (username.length !== 0 && th_prefix.length !== 0 && th_fname.length !== 0 && th_lname.length !== 0 && en_fname.length !== 0 && en_lname.length !== 0 && marriage.length !== 0 && nation.length !== 0 && religion.length !== 0 && birthday.length !== 0) {
            
            database.ref('users/' + username).set({
                username: username,
                email: auth.currentUser.email,
                name_thai: {
                    prefix: th_prefix,
                    first_name: th_fname,
                    last_name: th_lname
                },
                name_eng: {
                    first_name: en_fname,
                    last_name: en_lname
                },
                marriage: marriage,
                nation: nation,
                religion: religion,
                birthday: birthday,
                desc: desc,
            })
            this.props.addUser({
                username: username,
                email: auth.currentUser.email,
                name_thai: {
                    first_name: th_fname,
                    last_name: th_lname
                },
                name_eng: {
                    first_name: en_fname,
                    last_name: en_lname
                }
            })
            console.log('อัพเดทข้อมูล ' + auth.currentUser.email)
            this.props.changePage('Home');
        } else {
            console.log('กรอกข้อมูลไม่ครบ')
        }
        event.preventDefault();
    }

    render() {
        return (
            <span id="regis">
                <div className="container">
                    <h1>กรอกข้อมูลสมัครเข้าใช้งาน</h1>
                    <form onSubmit={this.handleSubmit} method="post">
                        <div>
                            <input type="text" name="username" placeholder="ชื่อผู้ใช้/username" value={this.state.username} onChange={this.handleInputChange} />
                            <input type="file" name="profileImg" value={this.state.profileImg} onChange={this.handleInputChange} accept="image/*" />
                        </div>
                        <div>
                            <input type="text" name="th_prefix" placeholder="คำนำหน้าชื่อ" value={this.state.th_prefix} onChange={this.handleInputChange} />
                            <input type="text" name="th_fname" placeholder="ชื่อ(ไม่ต้องมีคำนำหน้า)" value={this.state.th_fname} onChange={this.handleInputChange} />
                            <input type="text" name="th_lname" placeholder="นามสกุล" value={this.state.th_lname} onChange={this.handleInputChange} />
                        </div>
                        <div>
                            <input type="text" name="en_fname" placeholder="Name" value={this.state.en_fname} onChange={this.handleInputChange} />
                            <input type="text" name="en_lname" placeholder="Surname" value={this.state.en_lname} onChange={this.handleInputChange} />
                        </div>
                        <div>
                            <input type="text" name="marriage" placeholder="สถานะการแต่งงาน" value={this.state.marriage} onChange={this.handleInputChange} />
                            <input type="text" name="nation" placeholder="สัญชาติ" value={this.state.nation} onChange={this.handleInputChange} />
                            <input type="text" name="religion" placeholder="ศาสนา" value={this.state.religion} onChange={this.handleInputChange} />
                            <input type="date" name="birthday" value={this.state.birthday} onChange={this.handleInputChange} />
                        </div>
                        <div>
                            <input type="text" name="desc" placeholder="ข้อมูลอื่นๆ" value={this.state.desc} onChange={this.handleInputChange} />
                        </div>
                        <div>
                            <input type="submit" value="ยืนยัน" />
                        </div>

                    </form>
                </div>
            </span>
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
        addUser: username => {
            dispatch({
                type: 'USER',
                payload: username
            })
        },
        changePage: pageName => {
            dispatch({
                type: 'PAGE',
                payload: pageName,
            })
        }
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(RegisFill);