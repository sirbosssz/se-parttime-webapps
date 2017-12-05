import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './stylesheets/style.css';

import {
    NavBar,
    LoginPopUp,
    HomePage,
} from './components'

ReactDOM.render(
    <div>
        <NavBar />
        <LoginPopUp />
        <HomePage />
    </div>
    , document.getElementById('root')
);
registerServiceWorker();
