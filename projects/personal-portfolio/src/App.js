import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Projects from './routes/Projects'
import Contact from './routes/Contact'

const App = () => {
    return(
        <div>
            <Switch>
                <Route exact path='/' component={ Home }/>
                <Route path='/About' component = { About }/>
                <Route path='/Projects' component={ Projects }/>
                <Route path='/Contact' component={ Contact }/>
            </Switch>
        </div>
    )
}
export default App