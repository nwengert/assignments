import React from 'react'
import { Switch, Route } from 'react-router-dom'
// components
import Joke from './Joke'
import Nav from './Nav'
import About from './About'

function zApp(props) {
    return(
        <div>
            <Nav />
            <Switch>
                <Route exact path='/' component={Joke}/>
                <Route path='/about' component={About}/>
            </Switch>
        </div>
    )
}
export default zApp