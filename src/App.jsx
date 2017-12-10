import React, { Component } from 'react';

import {
    NavBar,
    PageContainer,
    Footer,
    PagePopup,
} from './components'

export default class App extends Component {
    render() {
        return (
            <div>
                <PagePopup />
                <NavBar />
                <PageContainer />
                <Footer />
            </div>
        )
    }
}