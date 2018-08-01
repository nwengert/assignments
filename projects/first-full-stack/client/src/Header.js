import React from 'react';
import HeaderNav from './HeaderNav';
import BodBuds from './images/bodBudsNoB.png';
import Welcome from './images/welcome.png';

function Header() {
    return (
        <div id="headerDiv">
            <div id="welcomeDiv">
                <div id="titleDiv">
                    <img src={Welcome} id="welcomeImg" alt="Welcome"/>
                </div>
                <br/>
                <h1>Macros Meal Creator </h1>
                <div id="byBodBudsDiv">by <img src={BodBuds} id="bodyBuddiesImg" alt="bodyBuddies"/></div>
                <hr/>
                <HeaderNav />
            </div>
        </div>
    )
}
export default Header
