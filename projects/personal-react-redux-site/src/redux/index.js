import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

const initialState = {
    title: []
}

const reducer = (prevState = initialState, action) => {
    switch (action.type) {
        case "GET_MOVIES":
            return {
                movies: action.movies, 
                year: action.year
            }
            default:
                return prevState
    }

}
 //ACTION CREATORS

 export const getMovies = (year) => {
     return dispatch => {
         //DO THE PROMISE STUFF
         axios.get(`https://api.themoviedb.org/3/discover/movie?primary_release_year=${year}&sort_by=revenue.desc&api_key=a3f27982af9aa24e43b4d5be28ea51dc`)
            .then(response => {
                dispatch({
                    type: "GET_MOVIES",
                    movies: response.data,
                    year: year
                })
                console.log(response.data,'this is the first one')
            })
     }
 }
 
 const store = createStore(reducer, applyMiddleware(thunk));

//  store.subscribe(() => console.log(store.getState(), 'this is the second one'));

 export default store;