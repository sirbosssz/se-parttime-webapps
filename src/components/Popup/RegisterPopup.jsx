import React, { Component } from 'react';

export default class RegisterPopup extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            email: '',
            password: '',
            error: '',
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
    
    render() {
        return (
            <div className="register-container">
                <h1>
                    Register
                </h1>
                <form method='POST' onSubmit={this.handleSubmit}>
                    <input className='textinput' type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleInputChange} />
                    <input className='textinput' type="email" name="email" placeholder="email" value={this.state.email} onChange={this.handleInputChange} />
                    <input className='textinput' type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleInputChange} />
                    <input className='buttoninput' type="submit" value="Login" />
                </form>
            </div>
        )
    }
}