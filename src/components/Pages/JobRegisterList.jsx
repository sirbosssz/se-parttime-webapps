import React, { Component } from 'react';

import {
    JobTitleCard,
    RegisteredUserCard,
} from './Cards/';

export default class JobRegisterList extends Component{
    render() {
        return (
            <div id="jobregisterlist">
                <JobTitleCard />
                <RegisteredUserCard />
            </div>
        )
    }
}
