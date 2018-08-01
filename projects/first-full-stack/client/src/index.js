import React from 'react';
// import { render } from 'react-dom'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import './styles/stylesSmall.css';
import './styles/gender.css';
import './styles/prep.css';
import './styles/intent.css';
import './styles/type.css';
import './styles/meal.css';


ReactDOM.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
    document.getElementById("root")
);

