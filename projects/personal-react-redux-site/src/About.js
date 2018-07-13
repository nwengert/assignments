import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class About extends Component {
    render() {
        // console.log(this.props)
        const { history } = this.props
        return (
        <div className='content'>
            <h2>Enter a year to return a list</h2>
            <button id='chooseButton'
                    onClick={()=> history.push('/inputYear')}
                    >Choose year</button>
        </div>
        )
    }
}
 export default withRouter(About);