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
            })
            .catch(err => {
                console.error(err);
            })
    }
}