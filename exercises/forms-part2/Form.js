import React, { Component } from 'react';

export default class Form extends Component {
    constructor() {
        super()

        this.state = {
            name: ''
        }

        this.handleChange = this.handleChange.bing(this)
    }

    //we need to make a function to put into the input box below
    handleChange (e) {
        const value = e.trget.type === 'checkbox' ? e.target.checked : e.target.value
        //whenever you want to change the state, use this.setState
        this.setState({[e.target.name]: value})
    }

    render() {
        return(
            <form>
                <input type="text" 
                    placeholder="First Name" 
                    value={this.state.fName} 
                    onChange={this.handleChange} />
                <input type="text" 
                    placeholder="Last Name" 
                    value={this.state.lName} 
                    onChange={this.handleChange} />
                <input type="checkbox"
                    name='isDead'
                    checked={this.state.isDead} 
                    onChange={this.handleChange}/>
                    Are you dead?
            </form>
        )
    }
}

export default Form;
