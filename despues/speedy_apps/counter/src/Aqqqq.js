import React, { Component } from 'react'

export default class Aqqqq extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.half = this.half.bind(this)
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
                count: prevState.count - 1
            }
        })
    }
    half() {
        this.setState(prevState => {
            return {
                count: prevState.count/2
            }
        })
    }
    render() {
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick = {this.increment}>Increase</button>
                <button onClick = {this.decrement}>Decrease</button>
                <button onClick = {this.half}>Half</button>
            </div>
        )
    }
}