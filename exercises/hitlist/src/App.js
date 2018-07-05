import React, { Component } from 'react';
import axios from 'axios';
import Hitees from './Hitees';

class App extends Component {
    constructor() {
        super()
        this.state={
            gettinHit: [],

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
                {/* it's not TODO for this exercise */}
                <Hitees info={this.state.name}/>  
                <p>{console.log(this.state.name)}</p>
            </div>
        )
    }
}

export default App