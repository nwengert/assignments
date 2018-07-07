import { createStore } from 'redux'

//Action creators => send action objects
export const addOne = () => {
    return {
        type: "ADD_ONE"
    }
}
export const subOne = () => {
    return {
        type: "SUB_ONE"
    }
}

// ||
// Dispatch
// ||

// Reducer
const reducer = (state = { num: 0 }, action) => {
    switch(action.type){
        case "ADD_ONE":
            return {
                num: state.num + 1
            }
        case "SUB_ONE":
            return {
                num: state.num - 1
            }
        case "TIMES_BY_TWO":
            return {
                num: state.num * 2
            }
        case "CHANGE_NUM":
            return {
                num: action.num
            }
        default :
            return state
    }
}
export default createStore(reducer)