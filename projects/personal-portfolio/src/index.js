import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
//styling
import './styles/stylesSmall.css';
import './styles/navbar.css';
import './styles/socialLinks.css';
import './styles/projectStyles.css';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
