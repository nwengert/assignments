import React,  { Component } from 'react'

export default class Aq extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.add = this.add.bind(this)
        this.subtract = this.subtract.bind(this)
        this.reset = this.reset.bind(this)
    }
    add() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }
    subtract() {
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            }
        })
    }
    reset() {
        this.setState({ count: 0 })
    }

    render() {
        return (
            <div>
                <button
                    onClick = {this.add}
                >add</button>
                <button
                    onClick = {this.subtract}
                >subtract</button>
                <button
                    onClick = {this.reset}
                >reset</button>
                <h1>{this.state.count}</h1>
            </div>
        )
    }
}