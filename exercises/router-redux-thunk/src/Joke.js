import React from 'react';

import { connect } from "react-redux";
import { getJoke } from "./redux";

function Joke(props) {
    return (
        <div>
            <h1>Chuck Norris Joke of the Day</h1>
            <button onClick={props.getJoke}>Chuck here for joke</button>
            {props.loading ?
                <p>...Chucking</p>
                :
                props.joke && <p>{props.joke.joke}</p>
            }

        </div>
    )
}

export default connect(prevState => prevState, { getJoke })(Joke);
