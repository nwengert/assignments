import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { connect } from 'react-redux'
import axios from "axios";

const initialState = {
    gender: "",
    intent: "",
    type: "",
    prep: "",
    loading: true,
    err: undefined
}
// console.log(`logged from redux ${this.state}`)
//ACTION CREATORS
export const genderSelect = () => {
    
}


const store = createStore(reducer, applyMiddleware(thunk));