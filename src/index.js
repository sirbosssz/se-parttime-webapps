import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// stylesheet import
import './stylesheets/style.css';

import {
    NavBar,
    PageContainer,
    Footer,
} from './components'

ReactDOM.render(
    <div>
        <NavBar />
        <PageContainer />
        <Footer />
    </div>
    , document.getElementById('root')
);
registerServiceWorker();
