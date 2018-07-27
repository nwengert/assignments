import React, { Component } from 'react';

export default class Form extends Component {
    constructor(){
        super();
        this.state = {
            firstName: '',
            lastName: '',
            isAwake: false,
            select: 'Beans'
        }
        //bind those things
        this.handleChange = this.handleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleChange (e) {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        this.setState({[e.target.name]: value})
    }
    handleSelect (e) {
        this.setState({select: e.target.value})
    }
    render() {
        return(
            <form>
                <input type="text"
                        name='firstName'
                        placeholder = 'First Name'
                        value={this.state.firstName}
                        onChange={this.handleChange}/>
                <input type="text"
                        name='lastName'
                        placeholder = 'Last Name'
                        value={this.state.lastName}
                        onChange={this.handleChange}/>
                Are you awake?
                <input type="checkbox"
                        name='isDead'
                        checked={this.state.isAwake}
                        onChange={this.handleChange}/>
                <select value={this.state.select} onChange={this.handleSelect}>
                    <option value="Burger">Chips</option>
                    <option value="Pizza">Pizza</option>
                    <option value="Cordon Bleu">Cordon Bleu</option>
                    <option value="Macaroni">Macaroni</option>
                    <option value="Beans">Beans</option>
                </select>
                <h1>{this.state.firstName} {this.state.lastName}</h1>
            </form>
        )
    }
}

