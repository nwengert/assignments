import React, { Component } from 'react'
import Navbar from './Navbar';
//project images
import DIT from '../images/DIT.png';
import Movies from '../images/Movies.png';
import ShoDat from '../images/ShoDat.png';
import XLJSON from '../images/XLJSON.png';
import Trends from '../images/Trends.png';
import MacroMeals from '../images/MacroMeals.png';
import PDF2XL from '../images/PDF2XL.png';
import ShoppingList from '../images/MERN-Shopping-List.png';
import columnComparer from '../images/columnComparer.jpeg'


export default class Projects extends Component {
    render() {
        return (
            <div className='ProjectsDiv'>
                <h2 id='projectsProjects'>Projects</h2>
                <Navbar />
                <div className='projectImages'>
                    <div className='hvrbox'>
                        <a href="https://macro-meal-creator.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <img src={ MacroMeals } className="projectImage" alt="Macro Meal Creator screen grab"/>
                            <div class="hvrbox-layer_top">
                                <div class="hvrbox-text">
                                    Full-stack app built for a business.  Uses Mongoose, Express, Morgan, Axios, and React-Router.
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='hvrbox'>
                        <a href="http://shodat.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <img src={ ShoDat } className="projectImage" alt="Showtunes Database Website Screen grab"/>
                            <div class="hvrbox-layer_top">
                                <div class="hvrbox-text">
                                    Full-stack React app built for a client. Uses Mongoose, Express, Bcrypt, Riddl-js, React-Router, Axios. <br/>Worked with 
                                    <a href="https://github.com/MaxxGarcia" id="MaxxGarcia"
                                            target="_blank" rel="noopener noreferrer"> Maxx Garcia. </a>
                                    <a href="https://github.com/MaxxGarcia/showtunes-database" id="ShoDat"
                                            target="_blank" rel="noopener noreferrer"> GitHub Repo</a>

                                </div>
                            </div>
                        </a>
                    </div>                   
                    <div className='hvrbox'>
                        <a href="https://github.com/nwengert/VBA/blob/master/Excel%20to%20JSON" target="_blank" rel="noopener noreferrer">
                            <img src={ XLJSON } className="projectImage" alt="Spreadsheet img"/>
                            <div class="hvrbox-layer_top">
                                <div class="hvrbox-text">
                                    Program written in Visual Basic for converting Excel spreadsheet table data into JSON.
                                </div>
                            </div>
                        </a>
                    </div> 
                    <div className='hvrbox'>
                        <a href="https://github.com/nwengert/barriers_to_entry/tree/master/mern_shopping_list" target="_blank" rel="noopener noreferrer">
                            <img src={ ShoppingList } className="projectImage" alt="Screengrab of Shopping List Web App"/>
                            <div class="hvrbox-layer_top">
                                <div class="hvrbox-text">
                                    MERN stack Shopping List. Just like those ubiquitous ToDo lists. 
                                </div>
                            </div>
                        </a>
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
                        <a href="https://youtu.be/u-k7ZuH-ad4" target="_blank" rel="noopener noreferrer">
                            <img src={ PDF2XL } className="projectImage" alt="PDF 2 Excel Screengrab"/>
                            <div class="hvrbox-layer_top">
                                <div class="hvrbox-text">
                                    PDF to Excel converter with Visual Basic
                                </div>
                            </div>
                        </a>
                    </div>  
                    <div className='hvrbox'>
                        <a href="https://youtu.be/YnhDJW1NBuE" target="_blank" rel="noopener noreferrer">
                            <img src={ columnComparer } className="projectImage" alt="Column Comparer Screengrab"/>
                            <div class="hvrbox-layer_top">
                                <div class="hvrbox-text">
                                    VBA program pulls data from separate workbooks into side by side columns and indicates differences for comparison
                                </div>
                            </div>
                        </a>
                    </div>  
                    <div className='hvrbox'>
                        <a href="https://github.com/nwengert/VBA/blob/master/DIT_update" target="_blank" rel="noopener noreferrer">
                            <img src={ DIT } className="projectImage" alt="DIT Screengrab"/>
                            <div class="hvrbox-layer_top">
                                <div class="hvrbox-text">
                                    Excel Visual Basic program that saved ~5 hrs/month by automatically updating and e-mailing Delivery and Inventory Trackers to field personnel.
                                </div>
                            </div>
                        </a>
                    </div>                     
                    <div className='hvrbox'>
                        <a href="https://github.com/nwengert/VBA/blob/master/Trends" target="_blank" rel="noopener noreferrer">
                            <img src={ Trends } className="projectImage" alt="DIT Screengrab"/>
                            <div class="hvrbox-layer_top">
                                <div class="hvrbox-text">
                                    Automating the accumulation of production data into a table of monthly trends of a customer' oil wells was a giant leap in my journey to automate everything I could in a previous job. 
                                </div>
                            </div>
                        </a>
                    </div> 
                </div>
            </div>
        )
    }
}
