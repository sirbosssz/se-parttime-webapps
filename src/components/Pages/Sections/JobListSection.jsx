import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class JobListSection extends Component {
    render() {
        return (
            <section id="joblistsection-user">
                <div className="head">
                    <span>งานที่รับสมัครล่าสุด</span>
                    <Link to={`/create`}>
                        <button className="btn">ประกาศรับสมัครงานพาร์ทไทม์</button>
                    </Link>
                </div>
                <div className="container">
                    รายการรับสมัครล่าสุด
                </div>
            </section>
        )
    }
}

export default JobListSection