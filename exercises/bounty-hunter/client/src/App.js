import React, { Component } from 'react';
import axios from 'axios';
import Content from './Content.js';
import Bounties from './Bounties';

class App extends Component {
    componentDidMount(){
        axios.get('/bounties').then(response => console.log(response.data))
    }
    render() {
        return(
            <div id="AppDiv">
                <h1>The Original Bounty Hunter</h1>
                <Content />
                <Bounties />
            </div>
        )
    }
}

export default App