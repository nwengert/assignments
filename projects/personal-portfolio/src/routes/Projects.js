import React, { Component } from 'react'
import Navbar from './Navbar';


export default class Projects extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <a href="http://movieyearlist.surge.sh"
                target="_blank" rel="noopener noreferrer">Top Movies by Year</a>
            </div>
        )
    }
}