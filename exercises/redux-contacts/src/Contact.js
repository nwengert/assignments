import React from "react";

function Contact(props){
    return(
        <div>
            {/* render individual contact info, and delete button */}
            <h4>{props.contact.name}</h4>
            <h5>{props.contact.phone}</h5>
            <h5>{props.contact.email}</h5>
            <button>Delete</button>
        </div>
    )
}

export default Contact;