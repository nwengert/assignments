import React from 'react';
import { render } from 'react-dom'
//ROUTER
import { BrowserRouter } from 'react-router-dom';
//REDUX
import { Provider } from 'react-redux';
import store from './redux';
import './styles.css'
import App from './App';

render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);