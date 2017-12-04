import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './stylesheets/style.css';

import NavBar from './components/NavBar';

ReactDOM.render(
    <div>
        <NavBar />
    </div>
    , document.getElementById('root')
);
registerServiceWorker();
