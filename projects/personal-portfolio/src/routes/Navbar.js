import React from 'react'
import { Link, withRouter } from 'react-router-dom';


function Navbar(props) {
    console.log(props);
    const {location: {pathname}} = props;
    return (
        <div className='navbar'>
            {pathname !== "/" &&         <Link className="navBtn" to='/'         id='Home'>Home</Link>}
            {pathname !== "/About" &&    <Link className="navBtn" to='/About'    id='About'>About</Link>}
            {pathname !== "/Projects" && <Link className="navBtn" to='/Projects' id='Projects'>Projects</Link>}
            {pathname !== "/Contact" &&  <Link className="navBtn" to='/Contact'  id='Contact'>Contact</Link>}
        </div>
    )
}
export default withRouter(Navbar)
