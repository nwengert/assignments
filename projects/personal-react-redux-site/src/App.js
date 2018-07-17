import React from 'react'
import Header from './Header.js'
import About from './About.js'
import YearInput from './YearInput.js'
import MovieList from './MovieList.js'
import { Switch, Route} from 'react-router-dom';

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={About}/>
                <Route path='/inputYear' component={YearInput}/>
                <Route path='/movieList' component={MovieList}/>
            </Switch>
            <div className='footer'>
                <img id='attributionLogo'            src="https://www.themoviedb.org/static_cache/v4/logos/408x161-powered-by-rectangle-blue-10d3d41d2a0af9ebcb85f7fb62ffb6671c15ae8ea9bc82a2c6941f223143409e.png" alt=""/>
                <p>2018 FireHawk Enterprises, LLC.</p>
            </div>
        </div>
    )
}

export default App


