import React from 'react';
import { connect } from 'react-redux';
import getMovies from './redux';

//all that this needs to be is a function that renders the props that it gets from YearInput

function MovieList(props) {
    let counter = 1;
    // console.log(props ? props : null, "testing")
    return (
        <div className='content'>
            <div className='movieList'>
                <h2>{props.year ? `Highest revenue movies from ${props.year}` : `Click Input Year to select year`}</h2>
                    {props.movies && props.movies.results.map((movie)=>{
                        return( 
                            <div className='movieDiv' key={movie.id}>
                                <br/>
                                <h2>{`${counter++}.`}</h2>
                                <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="movie poster"/>
                                <div className='textDiv'>
                                    <h3 className='movieTitle'>{`${movie.title}`}</h3>
                                    <p className='movieOverview'>{movie.overview}</p>
                                    <hr/>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}
export default connect(prevState => prevState, { getMovies })(MovieList);

