import React, { Component } from 'react'
var axios = require("axios");

export default class Meal extends Component {

    componentDidMount(){
        axios({
            method: "GET",
            url: "/meals",
            params: this.props.location.state
        })
        .then(function(response){
            const mealsArray = response.data
            console.log(response.data);
        })
        .catch(function(err){
            console.log(err)
        })
    }

    render() {
        const { history } = this.props;
        console.log(this.props.location.state);
        let intentWord = ""
        switch(this.props.location.state.intent){
            //based on the value set intentWord to something that makes grammatical sense

        }
        return (
            <div id="mealBodyDiv">

                <div id="mealTitleDiv">
                    <hr/>
                    <p>{(this.props.location.state.gender === "male")? "Mens' " : "Womens' " }
                        {this.props.location.state.type} {this.props.location.state.prep} for {this.props.location.state.intent}
                    </p>
                </div>
                <div>
                    <h3>{response.data[Math.floor(Math.random() * response.data.length)]}</h3>
                </div>





                <div className="arrowButtonsDiv">
                    <button className='restartButton'
                        onClick={()=> this.props.history.push('/')}>Restart</button>
                </div>
            </div>
        )
    }
}
