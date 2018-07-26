import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Services from './Services.js'
import Navbar from './Navbar.js';
import Contact from './Contact.js';

function App() {
    return(
        <div>
            <Navbar />
            <Switch id='container'>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/services' component={Services} />
            </Switch>
            <div className='footer'>
                <p>Copyright 2018 Wengert Enterprises, LLC.</p>
            </div>
            
        </div>
    )
}

export default App