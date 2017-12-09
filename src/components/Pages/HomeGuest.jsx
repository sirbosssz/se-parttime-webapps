import React, { Component } from 'react';

import {
    HeroSection,
    DetailsSection,
    ExampleJobSection,
    MoreSection,
} from './Sections/';

export default class HomeGuest extends Component {
    render() {
        return (
            <div id="homeguest">
                <HeroSection />
                <DetailsSection />
                <ExampleJobSection />
                <MoreSection />
            </div>
        )
    }
}