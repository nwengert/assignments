import React, { Component } from 'react'

export default class Aqqqqq extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.double = this.double.bind(this)
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
    double() {
        this.setState(prevState => {
            return{
                count: prevState.count * 2
            }
        })
    }
    render() {
        return(
            <div>
            <h1>{this.state.count}</h1>
                <button onClick = {this.increment}>Increase</button>
                <button onClick = {this.decrement}>Decrease</button>
                <button onClick = {this.double}>Double</button>
            </div>
        )
    }
}