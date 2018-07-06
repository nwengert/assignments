import React from 'react'
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <div className='navbar'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/services'>Services</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    )
}
export default Navbar