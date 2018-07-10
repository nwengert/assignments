import React, { Component } from 'react';
// later on we'll learn render props, which is way more dope than what we're doing here
//import redux stuff
import { connect }  from "react-redux";
import { addContact } from "./redux";



//we'll make a class because it'll need to have it's own internal state

class Form extends Component{
    constructor(){
        super();
        this.state = {
            name: "",
            phone: "",
            email: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        const { name, value } = e.target;
        this.setState({
                [name]: value
            })
    }
    handleSubmit(e){
        e.preventDefault();
        //dispatch the add action creator
        this.props.addContact(this.state);    //this line i got help with in the back of the room.. Jared
        
        // console.log('this came from Form - handleSubmit', this.state);
    }

    // handleDelete(e){

    // }
    render(){
        const { name, phone, email } = this.state;
        return(
            <form onSubmit={this.handleSubmit}>
                <input value={name} onChange={this.handleChange} name="name" type="text" placeholder="Enter Name"/>
                <input value={phone} onChange={this.handleChange} name="phone" type="text" placeholder="Enter Phone"/>
                <input value={email} onChange={this.handleChange} name="email" type="e-mail" placeholder="Enter Email"/>
                <button>Submit</button>
                {/* <ContactList {this.state}/> */}
            </form>
        )
    }
}

export default connect(null, { addContact })(Form);