import React, { Component } from 'react'
import Navbar from './Navbar';
//project images
import DIT from '../images/DIT.png';
import Movies from '../images/Movies.png';
import ShoDat from '../images/ShoDat.png';
import XLJSON from '../images/XLJSON.png';
import MacroMeals from '../images/MacroMeals.png';


export default class Projects extends Component {
    render() {
        return (
            <div className='ProjectsDiv'>
                <h2 id='projectsProjects'>Projects</h2>
                <Navbar />
                <div className='projectImages'>
                    <div className='hvrbox'>
                        <a href="http://shodat.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <img src={ ShoDat } className="projectImage" alt="Showtunes Database Website Screen grab"/>
                            <div class="hvrbox-layer_top">
                                <div class="hvrbox-text">
                                    V-School final, group project.  Full-stack React app built for a client. Uses Mongoose, Express, Bcrypt, Riddl-js, React-Router, Axios. <br/>Worked with 
                                    <a href="https://github.com/MaxxGarcia" id="MaxxGarcia"
                                            target="_blank" rel="noopener noreferrer"> Maxx Garcia. </a>
                                    <a href="https://github.com/MaxxGarcia/showtunes-database" id="ShoDat"
                                            target="_blank" rel="noopener noreferrer"> GitHub Repo</a>

                                </div>
                            </div>
                        </a>
                    </div>                   
                    <div className='hvrbox'>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <img src={ MacroMeals } className="projectImage" alt="Macro Meal Creator screen grab"/>
                            <div class="hvrbox-layer_top">
                                <div class="hvrbox-text">
                                    Full-stack app built for a business.  Uses Mongoose, Express, Morgan, Axios, and React-Router.
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='hvrbox'>
                        <img src={ XLJSON } className="projectImage" alt="Spreadsheet img"/>
                            <div class="hvrbox-layer_top">
                                <div class="hvrbox-text">
                                    Program written in Visual Basic for converting Excel spreadsheet table data into JSON.
                                </div>
                            </div>
                    </div> 
                    <div className='hvrbox'>
                        <a href="http://movieyearlist.surge.sh" target="_blank" rel="noopener noreferrer">
                            <img src={ Movies } className="projectImage" alt="Movies Website Screengrab"/>
                            <div class="hvrbox-layer_top">
                                <div class="hvrbox-text">
                                    React App using Redux, Redux-thunk, React-Router, and Axios to query themoviedb.org API.
                                </div>
                            </div>
                        </a>
                    </div>  
                    <div className='hvrbox'>
                            <img src={ DIT } className="projectImage" alt="DIT Screengrab"/>
                            <div class="hvrbox-layer_top">
                                <div class="hvrbox-text">
                                    Excel Visual Basic program that saved ~5 hrs/month by automatically updating and e-mailing Delivery and Inventory Trackers to field personnel.
                                </div>
                            </div>
                    </div> 
                </div>
            </div>
        )
    }
}
