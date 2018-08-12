import React, { Component } from 'react'
import Navbar from './Navbar';
import SocialLinks from '../SocialLinks.js';

export default class Contact extends Component {
    render() {
        return (
            <div className="componentDiv">
                <Navbar />
                <SocialLinks />
            </div>
        )
    }
}
