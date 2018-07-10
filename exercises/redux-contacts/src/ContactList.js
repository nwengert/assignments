import React from "react";
import { connect } from 'react-redux';
import Contact from './Contact.js';

function ContactList(props){
    const contactComponents = props.contacts.map (contact => {
        return(
            <Contact key={contact.name} contact={contact}/>
        )
    })
    return(
        <div>
            {contactComponents}
        </div>
    )
}


//connect to redux for the array of contacts

export default connect(state => state, {})(ContactList)