import React from 'react';
import { connect } from 'react-redux';
import getMovies from './redux';

//all that this needs to be is a function that renders the props that it gets from YearInput

function MovieList(props) {
    return (
        <div className='content'>
            <h2>Highest revenue movies from the year you entered;</h2>
            <p>{props.data}</p>
        </div>
    )
}
export default connect(prevState => prevState, { getMovies })(MovieList);
