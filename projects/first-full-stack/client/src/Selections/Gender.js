import React, { Component } from 'react'
// import { connect } from 'react-redux'
import Female from "../images/womanPinkCircle.png";
import Male from "../images/maleBlueCircle.png";

export default class Gender extends Component {
    render() {
        // console.log(this.props)
        return (
            <div id="genderDiv">
                <input checked={this.props.gender === "female"}
                    onChange={this.props.handleChange}
                    type="radio"
                    name="gender"
                    value="female" 
                    className="radio_item"
                    id="femaleBtn"/>
                <label 
                    className="label_item" 
                    htmlFor="femaleBtn">
                    <img src={Female} alt="female" className="genderPics" />
                </label>

                <input checked={this.props.gender === "male"}
                    onChange={this.props.handleChange}
                    type="radio"
                    name="gender"
                    value="male" 
                    className="radio_item"
                    id="maleBtn"/>
                <label
                    className="label_item" 
                    htmlFor="maleBtn">
                    <img src={Male} alt="male" className="genderPics" />
                </label>

            </div>
        )
    }
}
