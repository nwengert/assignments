import axios from "axios";

export function signup(userInfo) {  
    return dispatch => {
        axios.post("/auth/signup", userInfo)
            .then(response => {
                // We'll come back to this to dispatch an action to the reducer instead of just this console.log
                console.log(response.data);
                const {token, user} = response.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                dispatch(authenticate(user))
            })
            .catch(err => {
                console.error(err);
            })
    }
}
export function authenticate(user) {  
    return {
        type: "AUTHENTICATE",
        user  // pass the user for storage in Redux store
    }
}
const initialState = {  
    username: "",
    isAdmin: false,
    isAuthenticated: false
}

export default function reducer(state = initialState, action) {  
    switch (action.type) {
        case "AUTHENTICATE":
            return {
                ...state,
                ...action.user,
                isAuthenticated: true
            }
        default:
            return state;
    }
}
export function login(credentials) {  
    return dispatch => {
        axios.post("/auth/login", credentials)
            .then(response => {
                const {token, user} = response.data;
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                dispatch(authenticate(user))
            })
            .catch((err) => {
                console.error(err);
            });
    }
}