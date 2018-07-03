import React, { Component } from 'react'

class App extends Component {
    constructor() {
        super();

        this.styles = {
            color: '#333',
            fontSize: '10px',
            backgrounColor: 'red'
        }
        this.moreStyles = {
            border: '1px solid black',
            borderRadius: '10px'
        }
    }
    render () {
        return (
            <div style={{...this.styles, ...this.moreStyles}>
                Hello World
            </div>
        );
    }
}

export default App;