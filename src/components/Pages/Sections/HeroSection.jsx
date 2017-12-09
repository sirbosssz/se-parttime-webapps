import React, { Component } from 'react';

import {
    LoginButton,
    RegisterButton,
} from '../Buttons'

export default class HeroSection extends Component {
    render() {
        return (
            <section id="herosection-guest" className="fullscreen">
                <div>
                    <h1>HeroSection</h1>
                    <div className='button-area'>
                        <LoginButton />
                        <RegisterButton />
                    </div>
                </div>
            </section>
        )
    }
}