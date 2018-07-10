import { createStore } from 'redux';

const initialState = {
    contacts: []
}

const contactReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_CONTACT":
            return {
                contacts: [...state.contacts, action.contact]
            }
        // case "DELETE_CONTACT":
        //     return {
        //         contacts: //DO I HAVE A WAY TO TAKE THEM OUT OF HERE?

        //     }
        default:
            return state;
    }
}

//action creators
export const addContact = contact => {
    return {
        type: "ADD_CONTACT",
        contact
    }
}
 
const store = createStore(contactReducer);

store.subscribe(()=> console.log('This came from redux/index.js',store.getState()));

export default store;