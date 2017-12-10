import React, { Component } from 'react';

export default class JobEdit extends Component {
    render() {
        return (
            <div>
                <form action="" method="post">
                    <input type="text" name="title" />
                    <input type="text" name="location" />
                    <input type="textarea" name="desc" />
                    <input type="text" name="worktime" />
                    <input type="number" name="duration" />
                    <div className="top-fixed">
                        <input type="submit" value="OK" />
                    </div>
                </form>
            </div>
        )
    }
}