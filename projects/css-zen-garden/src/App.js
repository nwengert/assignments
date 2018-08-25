import React from 'react';
import Body from './Body';
import Footer from './Footer';
import midCent from './midCent';
import Top from './Top';
import viewThis from './viewThis';

function App () {
    return(
        <div className='appDiv'>
            <Top />
            <Body />
            <Footer />
            <midCent />
            <viewThis />
        </div>
    )
}
export default App