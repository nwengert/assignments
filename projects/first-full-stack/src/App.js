import React from 'react';
import './styles/stylesSmall.css'
import Header from './Header.js';
import Selections from './Selections.js';
import Footer from './Footer.js';


const App = () => {
    return (
        <div id="appDiv">
            <Header />
            <Selections />
            <Footer />
        </div>
    )
}

export default App;