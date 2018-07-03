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
    //handleChange function
    handleChange (e) {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        this.setState({[e.target.name]: value})
    }
    //handleSelect function
    handleSelect (e) {
        this.setState({selectL: e.target.value})
    }
    render() {
        return(
            <form>
                <input type="text"
                        placeholder = 'First Name'/>
                <input type="text"
                        placeholder = 'Last Name'/>
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
            </form>
        )
    }
}

