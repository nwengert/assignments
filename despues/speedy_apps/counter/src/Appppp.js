import React, { Component } from 'react'

export default class Appppp extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }
    increment() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }
    decrement() {
        this.setState(prevState => {
            return {
                count: prevState.count -1
            }
        })
    }
    reset() {
        this.setState({ count: 0 })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count * 2}</h1>
                <button
                    onClick = {this.increment}    
                >ADD</button>
                <button
                    onClick = {this.decrement}    
                >SUBTRACT</button>
                <button
                    onClick = {this.reset}    
                >RESET</button>
            </div>
        )
    }
}