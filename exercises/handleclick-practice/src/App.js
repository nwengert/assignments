import React, { Component } from 'react'

export default class App extends Component {
    constructor (){
        super()
        this.state = {
            counter: 0
        }
        this.upClick = this.upClick.bind(this);
        this.downClick = this.downClick.bind(this);
    }
    upClick(e){
        console.log('you clicked UP');
        this.setState((prevState) => ({counter: prevState.counter + 1}))
    }
    downClick(e){
        console.log('you clicked DOWN');
        this.setState((prevState) => ({counter: prevState.counter - 1}))
    }
    render() {
        return (
            <div id='counter'>
                <button onClick={this.upClick}>UP</button>
                <h1>{this.state.counter}</h1>
                <button onClick={this.downClick}>DOWN</button>
            </div>
        )
    }
}
