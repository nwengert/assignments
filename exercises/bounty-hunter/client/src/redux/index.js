import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";

const initialState = {
    bounties: [],
    loading: true,
    err: undefined
}


//action creators
const url = "/bounties/";

export const getBounties = () => {
    return dispatch => {
        axios.get(url)
            .then(res => {
                dispatch({
                    type: "GET_BOUNTIES",
                    bounties: res.data
                })
            })
    }
}
export const postBounty = (newBounty) => {
    console.log(newBounty)
    return dispatch => {
        axios.post(url, newBounty)
            .then(res => {
                dispatch({
                    type: "POST_BOUNTY",
                    bounties: res.data
                })
                console.log(res.data);  //when this is seen, then it's time to dispatch to somet
            })
            .catch(error => {
                console.log(error);
            });
    }
}
export const deleteBounty = (id) => {
    return dispatch => {
        axios.delete(url + id)  // <------NEED ID HERE
            .then(res => {
                dispatch({
                    type: "DELETE_BOUNTY",
                    id: id
                })
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_BOUNTIES": 
            return {
                ...state,
                loading: false,
                bounties: action.bounties
            }
        case "POST_BOUNTY":
            return {
                ...state,
                loading: false,
                bounties: [action.bounties, ...state.bounties]
            }
        case "DELETE_BOUNTY":
            return {
                ...state,
                loading: false,
                bounties: state.bounties.filter(bounty => bounty._id !== action.id)
            }
        default: return state;
    }
}
const store = createStore(reducer, applyMiddleware(thunk));
export default store