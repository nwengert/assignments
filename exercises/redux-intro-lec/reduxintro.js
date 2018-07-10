//Ben's lecture on Redux the monday after he got back, July 9

//Store
//Reducers
//Dispatch
//View



// the Store is like the fort in Oregon Trail
// 


//this will be a super bare construction of what Redux is, no React
//The foundation of what is happening

const store = {
    state: undefined, 
    getState: (reducer)=>{
        //take a reducer(by calling it) and return the value
        return reducer(this.state, { type: "GET_STATE" });
    },
    dispatch: function (action, reducer) {
        //dispatch is just a function that does a few things
        //calls the reducer and provides it the action
        this.state = reducer(this.state, action);
        //

    }
}

const initialState = {counter: 0}


//define a reducer, it only provides a new state, based upon a previous state and an action. 
const reducer = (prevState = initialState, action)=>{
    switch(action.type){
        case "INCREMENT":
            return {
                counter: prevState.counter + action.incrementBy
            }
        default:
            return prevState;
    }
}

//now ask for the state
console.log(store.getState(reducer));  // {counter: 0 }

//ACTION CREATOR
const increment = (incrementBy) => {
    // the object is the action
    return{ type: "INCREMENT", incrementBy};
}

//now just call the dispatch
store.dispatch(increment(22), reducer);

console.log(store.getState(reducer));   //for some reason this isn't working


//rest of lecture
//what to remember about Redux. 

//using Redux:
    //install it
    //Create store with reducers
    //attach store to <Provider/> - the thing that houses the store that communicates with the rest of the App
    //stick the <App /> right in between the Privider tags
    //write action creators in order to change state in the ways that you want it to. 
    //connect state and/or action creators to individual components

            //no matter how intricate your app gets, it doesn't get any more complicated than this.
            // there is just some boilerplate code to remember for all of it.  
            
//workflow to set up redux in react
    //first build a React app that works (shows your App.js text in div)
    //then create store

                    // import createStore from 'redux';

                    // const initialState = {
                    //     contacts: []
                    // }

                    // const contactReducer = (state = initialState, action) => {
                    //     switch(action.type){
                    //         default:
                    //             return state;
                    //     }
                    // }

                    // const store = createStore(contactReducer);

                    // export default store;
