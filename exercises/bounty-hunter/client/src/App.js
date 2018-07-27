import React, { Component } from 'react';
import axios from 'axios';
import Form from './Form.js';
import Bounties from './Bounties.js';

export default class App extends Component {
    componentDidMount(){
        axios.get('/bounties').then(response => console.log(response.data))
    }
    render() {
        return(
            <div id="AppDiv">
                <h1>The Original Bounty Hunter</h1>
                <Form />
                <Bounties />
            </div>
        )
    }
}