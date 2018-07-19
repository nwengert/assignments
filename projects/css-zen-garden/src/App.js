import React from 'react';
import Top from './Top';
import Right from './Right';
import Left from './Left';
import Footer from './Footer';
import Body from './Body';

function App () {
    return(
        <div className='appDiv'>
            <Top />
            <Body />
            <Right />
            <Left />
            <Footer />
        </div>
    )
}

export default App