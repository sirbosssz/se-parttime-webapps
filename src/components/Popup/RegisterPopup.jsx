import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from '../../firebase';

const database = firebase.database();
const auth = firebase.auth();

class RegisterPopup extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            th_fname: '',
            th_lname: '',
            email: '',
            password: '',
            repeatPass: '',
            error: '',
        }
    }

    handleSubmit = event => {
        let username = this.state.username,
            th_fname = this.state.th_fname,
            th_lname = this.state.th_lname,
            email = this.state.email,
            password = this.state.password,
            repeatPass = this.state.repeatPass;
        //check input
        if (username.length !== 0 && email.length !== 0 && password.length !== 0) {
            //check password
            if (password === repeatPass) {
                if (password.length > 6 && password.length < 14) {
                    this.setState({ error: '' })
                    //password confirm
                    console.log('%c password correct', 'color:green');
                } else {
                    this.setState({ error: 'รหัสผ่านควรมีความยาวระหว่าง 6 ถึง 14 ตัวอักษร' })
                }
                // check email and username
                database.ref('/users/').once('value', snapshot => {
                    snapshot.forEach(childSnapshot => {
                        //email duplicate
                        if (childSnapshot.val().email === email) {
                            this.setState({ error: 'อีเมล์ซ้ำกับในระบบ' })
                        }
                        if (childSnapshot.val().username === username) {
                            this.setState({ error: 'ชื่อผู้ใช้ซ้ำกับในระบบ' })
                        }
                    })
                })
                if (this.state.error) {
                    console.log('%c email, username correct', 'color:green');
                    // everything pass

                    //create auth
                    auth.createUserWithEmailAndPassword(email, password).catch(error => {
                        console.log('%cerror: ' + error.code + error.message, 'color:red');
                    })
                    this.props.addUser({
                        username: username,
                        email: email,
                        name_thai: {
                            first_name: th_fname,
                            last_name: th_lname
                        }
                    })
                    this.props.changePage('Regis');
                    // close popup
                    document.getElementById('popup').classList.add('hide');
                    this.props.popupClose();
                }
            } else {
                this.setState({ error: 'รหัสผ่านไม่ตรงกัน' })
            }
        }
        event.preventDefault();
    }

    handleInputChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value,
        })
    }

    render() {
        return (
            <div className="register-container">
                <h1>
                    Register
                </h1>
                <form method='POST' onSubmit={this.handleSubmit}>
                    <div>
                        <input className='textinput' type="text" name="th_fname" placeholder="ชื่อ" value={this.state.th_fname} onChange={this.handleInputChange} />
                        <input className='textinput' type="text" name="th_lname" placeholder="นามสกุล" value={this.state.th_lname} onChange={this.handleInputChange} />
                    </div>
                    <input className='textinput' type="text" name="username" placeholder="ชื่อผู้ใช้" value={this.state.username} onChange={this.handleInputChange} />
                    <input className='textinput' type="email" name="email" placeholder="อีเมล์" value={this.state.email} onChange={this.handleInputChange} />
                    <input className='textinput' type="password" name="password" placeholder="รหัสผ่าน" value={this.state.password} onChange={this.handleInputChange} />
                    <input className='textinput' type="password" name="repeatPass" placeholder="ยืนยันรหัสผ่าน" value={this.state.repeatPass} onChange={this.handleInputChange} />
                    <input className='buttoninput' type="submit" value="สมัครสมาชิก" />
                </form>
            </div>
        )
    }
}

const mapStatetoProps = state => {
    return {
        popup: state.popup,
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        popupClose: () => {
            dispatch({
                type: 'POPUP',
                payload: '',
            })
        },
        addUser: username => {
            dispatch({
                type: 'USER',
                payload: username,
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

export default connect(mapStatetoProps, mapDispatchtoProps)(RegisterPopup)