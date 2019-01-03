import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Nav from './Nav'
import Joke from './Joke'
import About from './About';

function App(props) {
    return(
        <div>
            <h1>These are jokes for you</h1>
            <Nav />
            <Switch>
                <Route path='/' component={Joke}/>
                <Route path='`about`' component={About}/>
            </Switch>
        </div>
    )
}

export default App