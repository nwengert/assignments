import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import axios from "axios";

const initialState = {
    bounties: [],
    loading: true,
    err: undefined
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_BOUNTIES":     //there will eventually bew another case of POST_BOUNTIES
            return {
                ...state,
                loading: false,
                bounties: action.bounties
            }
        default: return state;
    }
}

//action creators

const url = "/bounties";

export const getBounties = () => {
    return dispatch => {
        axios.get(url)
            .then(response => {
                dispatch({
                    type: "GET_BOUNTIES",
                    bounties: response.data
                })
            })
    }
}
//add bounty action creator
export const postBounties = (newBounty) => {
    return dispatch => {
        axios.post("/bounties", newBounty)
            .then(res => {
                console.log(res.data);  //when this is seen, then it's time to dispatch to somet
            })

            .catch(error => {
                console.log(error);
            });

    }
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;