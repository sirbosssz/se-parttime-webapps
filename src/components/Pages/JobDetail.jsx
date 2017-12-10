import React, { Component } from 'react';

import {
    JobDetail,
    OwnerCard,
    RalatedJobsCard,
} from './Cards/';

export default class JobDetail extends Component{
    render() {
        return (
            <div id="jobdetail">
                <JobDetailCard />
                <OwnerCard />
                <RelatedJobsCard />
            </div>
        )
    }
}
