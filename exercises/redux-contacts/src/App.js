import React from 'react';
import ContactList from './ContactList';

//components
import Form from "./Form";

//we are going to need a form, and a way to see a list of things 
function App(props){
    return(
        <div>
            <Form />
            <ContactList />
        </div>
    )
}

export default App