import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='navbar'>
            <Link to='/'>About</Link>
            <Link to='/inputYear' id='inputYear'>Input Year</Link>
            <Link to='/movieList'>Movie List</Link>
        </div>
    )
}
export default Navbar
