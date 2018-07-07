import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addOne } from './redux'

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
        return(
            <div>
                <h1> Number: { this.props.num }</h1>
                <button onClick={ this.props.addOne }> Add One </button>
                <form onSubmit={ this.handleSubmit }>
                    <input 
                        type="number"
                        name="userInput"
                        onChange={ this.handleChange }
                        placeholder='Enter a new number'
                        value={ this.state.userInput }/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default App