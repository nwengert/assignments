import React from 'react';
import nateCartoon from '../images/nwengertCartoon.png'
import Navbar from './Navbar';


const Home = () => {
    return(
        <div className='contentDiv'>
            <div id="titleDiv1">
                <div id="topImgDiv">
                    <div id="cartoonDiv">
                        <img id="nateCartoon" src={nateCartoon} alt=""/>
                    </div>
                </div>
                <div id='titleDiv2'>
                    <div className="nameText" id="fName">
                        <p>NATHAN</p>
                    </div>
                    <div className="nameText" id="lName">
                        <p>WENGERT</p>
                    </div>
                </div>
                <div id="synopsisDiv1">
                    <div id="synopsisDiv2">
                         <br/> MERN stack web developer<br/>
                        Optimizer <br/>
                        First World problem solver <br/> <br/>
                    </div>
                </div>
                <Navbar />
                <p>This site is currently under construction</p>
            </div>
        </div>

    )

}

export default Home

