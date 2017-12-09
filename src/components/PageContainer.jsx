import React, { Component } from 'react';

export default class PageContainer extends Component {
    render() {
        return (
            <div className='page'>
                <style jsx>{`
                    .page{
                        width: 100%;
                        height: 100vh;
                        background: #fefefe;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                `}</style>
                <h1 className="headtext">Hello World</h1>
            </div>
        )
    }
}