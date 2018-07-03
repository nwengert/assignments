import React, { Component } from 'react';
import NamesDisplay from './NamesDisplay';

export default class NameEntryForm extends Component {
    constructor(){
        super()
        this.state = {
            input: '',
            names: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    handleChange(e){
        const name = e.target.name
        const value = e.target.value
        this.setState({
            input: value   //input could have square bracket
        })
    }
    handleSubmit(e){
        e.preventDefault()
        this.setState(prevState => {
            return {
                names: [ ...prevState.names, this.state.input],
                input: ''
            }
        })
    }
    
    render(){

        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" 
                            placeholder='Enter Name'
                            value={this.state.input}
                            onChange={this.handleChange}
                            name='input'/>
                    <button>Submit</button>
                </form>
                <NamesDisplay 
                    input={this.state.input} 
                    names={this.state.names}/>
            </div>
        )
    }
}


