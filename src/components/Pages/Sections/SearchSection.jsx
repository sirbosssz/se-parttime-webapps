import React, { Component } from 'react';

export default class SearchSection extends Component {
    render() {
        var searchResult = ''
        return(
            <section id="searchsection-user">
                <div className="container">
                    <h1 id="searchtext">งานที่รับสมัครล่าสุด</h1>
                </div>
                {searchResult}
            </section>
        )
    }
}