import React from 'react';
import Body from './Body';
import Footer from './Footer';
import Navbar from './Navbar';
// create a functional component

function App () {
    const styles = {
        backgroundColor: 'lightgreen'
    }
    return (
        
        <div style = {styles}>
            <Navbar />
            <Body />
            <Footer />
        </div>
    )
}

export default App