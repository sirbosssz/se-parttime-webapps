import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <style jsx>{`
                    footer{
                        width:100%;
                        height: 60px;
                        background: #333;
                    }
                `}</style>
            </footer>
        )
    }
}