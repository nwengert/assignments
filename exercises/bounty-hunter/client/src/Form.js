import React, { Component } from 'react'
import { connect } from 'react-redux';
import { postBounty } from './redux/index.js'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            living: true,
            bountyAmount: undefined,
            type: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        //call getBounties redux/index.js and pass this.state into it
        this.props.postBounty(this.state)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                    name="firstName"
                    //I hadn't given any of these things NAMES!!!!  Sam helped with that. 
                    placeholder="First Name"
                    value={this.state.firstName}
                    onChange={this.handleChange} />
                <input type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={this.state.lastName}
                    onChange={this.handleChange} />
                <input type="boolean"
                    name="living"
                    placeholder="Living?"
                    value={this.state.living}
                    onChange={this.handleChange} />
                <input type="number"
                    name="bountyAmount"
                    placeholder="Bounty Amount"
                    value={this.state.bountyAmount}
                    onChange={this.handleChange} />
                <input type="text"
                    name="type"
                    placeholder="Type"
                    value={this.state.type}
                    onChange={this.handleChange} />
                <button>Add</button>
            </form>
        )
    }
}
//connect to redux/index.js
export default connect(state => state, { postBounty })(Form);
                //then call getBounties in the handleSubmit
                //pass this.state into it.  
                //then make that go up into the new state or soething>?

                //then after that entire cycle is resolved, find ways to delete and edit.   yay!!
