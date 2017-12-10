import React, { Component } from 'react';

import {
    SearchSection,
    JobListSection,
} from './Sections/';

export default class HomeUser extends Component {
    render() {
        return (
            <div id="homeuser">
                <SearchSection />
                <JobListSection />
            </div>
        )
    }
}