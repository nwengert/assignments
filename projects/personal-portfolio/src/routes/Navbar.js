import React from 'react'
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <div className='navbar'>
            <Link className="navBtn" to='/' id='Home'>Home</Link>
            <Link className="navBtn" to='/About' id='About'>About</Link>
            <Link className="navBtn" to='/Projects' id='Projects'>Projects</Link>
            <Link className="navBtn" to='/Contact' id='Contact'>Contact</Link>
        </div>
    )
}
export default Navbar
