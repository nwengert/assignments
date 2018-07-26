import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({value: event.target.value});
    }
    handleSubmit(e){
        event.preventDefault();
    }


    render() {
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <input placeholder="First Name" type="text" 
                    value={this.state.value} onChange={this.handleChange}/>
                <input placeholder="Last Name" type="text"
                    value={this.state.value} onChange={this.handleChange}/>
                <input placeholder="Living?" type="boolean"
                    value={this.state.value} onChange={this.handleChange}/>
                <input placeholder="Bounty Amount" type="number"
                    value={this.state.value} onChange={this.handleChange}/>
                <input placeholder="Type" type="text"
                    value={this.state.value} onChange={this.handleChange}/>
                <button>Add</button>
            </form>
        </div>
        )
    }
}
