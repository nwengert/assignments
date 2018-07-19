import React, { Component } from 'react'
import { getMovies } from './redux';
import { connect } from 'react-redux';

import images from "./img.json";

//make this a class -- with state
//like hitlist


class YearInput extends Component {
    constructor() {
        super()
        this.state = {
            inputYear: '',
            img: this.imageSwitch()
            //add other things later
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.getMovies(this.state.inputYear)
        this.props.history.push('./movieList')
    }
    imageSwitch(props) {
        //select a file object from array at random
        // return it
        const imgFiles = images.map(file => {
            const jsFile = {...file};
            jsFile.filename = require(`./images/${file.filename}`);
            return jsFile;
        })
        return imgFiles[Math.floor(Math.random() * imgFiles.length)];
    }


    render() {
        
        return (
            <div className='content'>
                <form onSubmit={this.handleSubmit} id='inputYearForm'>
                    <h1>List of movies</h1>
                    <input onChange={this.handleChange}
                        name='inputYear'
                        value={this.state.inputYear}
                        type="number"
                        placeholder='Enter year'
                        id='inputYear' />
                    <button className='button'>Submit</button>
                </form>
                <img className='randomImages' id={this.state.img.id} src={this.state.img.filename} alt="" />
            </div>
        )
    }
}
export default connect(state => state, { getMovies })(YearInput)

