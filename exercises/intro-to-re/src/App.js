import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addOne, subOne, timesByTwo, changeNum } from './redux'

class App extends Component {
    constructor(){
        super();
        this.state = {
            userInput: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault()
        this.props.changeNum( this.state.userInput )
        this.setState({ 
            userInput: ''
        })
    }
    render(){
        return  (
            <div> 
                <h1> Number: { this.props.num }</h1>
                <button onClick={ this.props.addOne }> Add one </button>
                <button onClick={ this.props.subOne }>Subtract One</button>
                <button onClick={ this.props.timesByTwo }> x2 </button>
                <form onSubmit={ this.handleSubmit }>
                    <input 
                        type="number" 
                        name="userInput"
                        onChange={ this.handleChange }
                        placeholder="Enter a new number"
                        value={ this.state.userInput }/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

// 1. this.props.addOne()

export default connect(state=>state, { addOne, subOne, timesByTwo, changeNum } )(App)