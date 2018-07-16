import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import Gollum from './images/imgGollum.png'

class About extends Component {
    render() {
        // console.log(this.props)
        const { history } = this.props
        return (
            <div className='content'>
                <h2>Enter a year to return a list</h2>
                <button className='button'
                        onClick={()=> history.push('/inputYear')}
                        >Choose year</button>
                <img id="Gollum" src={Gollum} alt=""/>
            </div>
        )
    }
}
 export default withRouter(About);