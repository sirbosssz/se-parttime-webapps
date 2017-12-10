import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// stylesheet import
import './stylesheets/style.css';

import App from './App';
import mainReducer from './redux.reducers';
// import { popupChange } from './redux.actions';

let store = createStore(mainReducer);

store.subscribe(() => {
    console.log('update', store.getState())
})
// store.dispatch(popupChange('login'));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root')
);
registerServiceWorker();
