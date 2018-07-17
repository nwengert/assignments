import React, { Component } from 'react'
import { getMovies } from './redux';
import { connect } from 'react-redux';

import HanSolo from './images/imgHanSolo.png';
import ATAT from './images/imgATAT.png';
import BobaFett from './images/imgBobaFett.png';
import Hogwarts from './images/imgHogwarts.png';
import IronMan from './images/imgIronMan.png';
import Ted from './images/imgTed.png';
import Scout from './images/imgUpScout.png';
import Watney from './images/imgWatney.png';


//make this a class -- with state
//like hitlist


class YearInput extends Component {
    constructor() {
        super()
        this.state = {
            inputYear: ''
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
    imageSwitch() {
        //select a file object from array at random
        // return it
        const imgFiles = [
            { filename: HanSolo, id: "HanSolo" },
            { filename: ATAT, id: 'ATAT'}, 
            { filename: BobaFett, id: 'BobaFett'},
            { filename: Hogwarts, id: 'Hogwarts'}, 
            { filename: IronMan, id: 'IronMan'}, 
            { filename: Ted, id: 'Ted'}, 
            { filename: Scout, id: 'Scout'},
            { filename: Watney, id: 'Watney'}
        ];
        return imgFiles[(Math.floor(Math.random() * imgFiles.length))] 
    }


    render() {
        const img = this.imageSwitch();
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
                <img className='randomImages' id={img.id} src={img.filename} alt="" />
            </div>
        )
    }
}
export default connect(state => state, { getMovies })(YearInput)

