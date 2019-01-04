import axios from 'axios'
import thunk from 'redux-thunk'
import { createStor, applyMiddleware } from 'redux'

const initialState = {
    joke: null,
    loading: false
}

const reducer = (prevState = initialState, action) => {
    switch (action.type) {
        case "START_LOADING":
            return {
                ...prevState,
                loading: true
            }
        case "GET_JOKE":
            return {
                joke: action.joke,
                loading: false
            }
        default:
            return prevState;
    }
}

//ACTION CREATORS

export const getJoke = () => {
    return dispatch => {
        dispatch({type: "START_LOADIMG"});
        axios.get("https://api.icndb.com/jokes/random?")
            .then(response => {
                dispatch({
                    type: "GET_JOKE",
                    joke:response.data.value
                })
            })
    }
}

const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));
export default store;