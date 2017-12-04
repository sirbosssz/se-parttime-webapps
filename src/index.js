import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './stylesheets/style.css';

import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import LoginPopUp from './components/LoginPopUp';

ReactDOM.render(
    <div>
        <NavBar />
        <LoginPopUp />
        <HomePage />
    </div>
    , document.getElementById('root')
);
registerServiceWorker();
