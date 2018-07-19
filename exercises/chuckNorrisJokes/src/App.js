import React from 'react';

//components
import Nav from "./Nav";
import About from "./About";
import Joke from "./Joke";

//router
import { Switch, Route } from "react-router-dom";

function App(props) {
    return (
        <div>
            <Nav />
            <Switch>
                <Route exact path="/" component={Joke}/>
                <Route path="/about" component={About} />
            </Switch>
        </div>
    )
}

export default App;
