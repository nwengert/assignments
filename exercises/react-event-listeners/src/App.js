import React, { Component } from 'react';

// this just makes a button that console.logs hello
//     with Sam when Ben was gone. 

class App extends Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
        this.handleClick = this.handleClick.bind(this)
        this.down = this.down.bind(this)

    }
    handleClick(e) {
        console.log('you clicked UP');
        this.setState((prevState) => ({counter: prevState.counter + 1}))
    }
    down(e) {
        console.log('you clicked DOWN');
        this.setState((prevState) => ({counter: prevState.counter - 1}))
    }


    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleClick}>UP</button>
                <button onClick={this.down}>DOWN</button>

            </div>
        )
    }
}



// class App extends React.Component {  
//     constructor() {
//       super();
//       this.state = {counter: 0}
//       this.up = this.up.bind(this);
//       this.down = this.down.bind(this);
//     }
//     up() {
//       this.setState((prevState) => ({counter: prevState.counter + 1}));
//     }
//     down() {
//       this.setState((prevState) => ({counter: prevState.counter - 1 }));
//     }
//     render() {
//       return (
//         <div>
//           <h2>{this.state.counter}</h2>
//           <button onClick={this.up}>Up</button>
//           <button onClick={this.down}>Down</button>
//         </div>
//       )
//     }
//   }



export default App