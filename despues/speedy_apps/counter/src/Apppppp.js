import React, { Component } from 'react'

export default class Apppppp extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
        this.reset = this.reset.bind(this)
    }
    handleClick() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
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
                    onClick = {this.handleClick}
                >CHANGE</button>
                <button
                    onClick = {this.reset}
                >RESET</button>
                <h1>{this.state.count}</h1>
                <h1>{this.state.count * 2}</h1>
                <h1>{this.state.count * 3}</h1>
                <h1>{this.state.count * 4}</h1>
            </div>
        )
    }
}