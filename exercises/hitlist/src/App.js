import React, { Component } from 'react';
import axios from 'axios';
import Hitees from './Hitees';
import Header from './Header';

class App extends Component {
    constructor() {
        super()
        this.state={
            gettinHit: [],
            name: []    //this is what I missed, the first time it makes a request there has to be something there, even if that something is nothing.  
        }
    }

    componentDidMount() {
        axios.get("http://api.vschool.io:6543/hitlist.json").then(response => {
            this.setState({name: response.data})
        })
    }

    render(){
        return(
            <div>
                <Header />
                <Hitees info={this.state.name}/>  
            </div>
        )
    }
}

export default App