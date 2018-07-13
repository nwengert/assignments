import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='navbar'>
            <Link to='/' className='navLink'>About</Link>
            <Link to='/inputYear' id='inputYear'>Input Year</Link>
            <Link to='/movieList' className='navLink'>Movie List</Link>
        </div>
    )
}
export default Navbar
