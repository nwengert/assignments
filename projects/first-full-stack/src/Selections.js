import React, { Component } from 'react'
import Female from "./images/womanPinkCircle.png";
import Male from "./images/maleBlueCircle.png";

export default class Selections extends Component {
    render() {
        return (
            <div id="selectionsDiv">
                <div id="genderDiv">
                    <input type="radio" name="rad1" className="genderRadio"/>
                    <input type="radio" name="rad1" className="genderRadio"/>
                    <img className="genderPics" src={Female} alt="Female logo"/>
                    <img className="genderPics" src={Male} alt="Male logo"/>
                </div>
                <div id="intentDiv">
                    <div className="intent">Maintain</div>
                    <div className="intent">Fat Loss</div>
                    <div className="intent">Gains</div>
                </div>
                <div id="mealTypeDiv">
                    <div className="intent">Low Fat</div>
                    <div className="intent">Low Carb</div>
                </div>
                <div id="buttonDiv">
                    <button id="goButton">GO!</button>
                </div>
            </div>
        )
    }
}
