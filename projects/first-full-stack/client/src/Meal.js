import React, { Component } from 'react'

export default class Meal extends Component {

    componentDidMount(){
        // axios.get({
//     url: "http://localhost:8080/meals",
//     params: this.props.location.state
// })
    }
    render() {
        const { history } = this.props;
        console.log(this.props.location.state);
        return (
            <div>
                This is the MEAL page


                <div className="arrowButtonsDiv">
                    <button className='restartButton'
                        onClick={()=> this.props.history.push('/')}>Restart</button>
                </div>
            </div>
        )
    }
}
