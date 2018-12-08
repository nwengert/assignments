import React, { Component } from 'react'

export default class Appp extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleClickB = this.handleClickB.bind(this);
        this.reset = this.reset.bind(this);

    }

    handleClick() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }
    handleClickB() {
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
        return(
            <div className='wrapper'>
                <h1>{this.state.count}</h1>
                <button
                    onClick={this.handleClick}
                >Click!</button>                
                <button
                    onClick={this.handleClickB}
                >Click!</button>
                <button
                    onClick={this.reset}
                >RESET</button>
            </div>
        )
    }
}