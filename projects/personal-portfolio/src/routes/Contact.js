import React, { Component } from 'react'
import Navbar from './Navbar';
import SocialLinks from '../SocialLinks.js';

export default class Contact extends Component {
    render() {
        return (
            <div className="componentDiv">
                <Navbar />
                <h2 id='number'>928.245.3373</h2>
                <SocialLinks />
            </div>
        )
    }
}
