import React, { Component } from 'react'
import Navbar from './Navbar';
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png";


export default class Contact extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="socialLinks" id="socialDiv">
                <a href="https://www.facebook.com/bodbuds" alt="facebook link" 
                        target="_blank" rel="noopener noreferrer">
                    <img src={facebook} alt="facebook" className="socialImg"/></a>
                <a href="https://www.instagram.com/bodbuds/" alt="instagram link" 
                        target="_blank" rel="noopener noreferrer">
                    <img src={instagram} alt="instagram" className="socialImg"/></a>
                 </div>
            </div>
        )
    }
}
