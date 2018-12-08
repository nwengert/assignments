import React, { Component } from 'react'

export default class Appppppp extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.reset = this.reset.bind(this)
        this.multBySeven = this.multBySeven.bind(this)
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
            return{
                count: prevState.count - 1
            }
        })
    }
    multBySeven() {
        this.setState(prevState => {
            return{
                count: prevState.count * 7
            }
        })
    }
    reset() {
        this.setState({ count: 0 })
    }
    render() {
        return(
            <div>
                <button
                    onClick={this.increment}
                >more</button>
                <button
                    onClick={this.decrement}
                >less</button>
                <button
                    onClick={this.reset}
                >reset</button>
                <button
                    onClick={this.multBySeven}
                >* 7</button>
                <h1>{this.state.count}</h1>
                <h1>{this.state.count + 1}</h1>
            </div>
        )
    }
}