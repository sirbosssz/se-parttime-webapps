import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// stylesheet import
import './stylesheets/style.css';

import {
    NavBar,
    PageContainer,
    Footer,
    PagePopup,
} from './components'

ReactDOM.render(
    <div>
        <PagePopup />
        <NavBar />
        <PageContainer />
        <Footer />
    </div>
    , document.getElementById('root')
);
registerServiceWorker();
