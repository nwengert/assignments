import React from 'react';
import heroImage from './heroCafe.png';

class App extends React.Component {
    constructor() {
        super()
        this.clickSuperman = this.clickSuperman.bind(this)
        
    }
    clickSuperman(e) {
        alert `My mom's name is Martha!`;
    }
    clickBlackPanther(e) {
        alert `Have you been to the ancestral plane?`;
    }
    clickThor(e) {
        alert `I beat the Hulk, easily.`
    }
    clickStarLord(e) {
        alert `Dance-off, bro. Me and you.`
    }
    clickGroot(e) {
        alert `I am Groot`;
    }
    clickDrax(e) {
        alert `WHY is Gamora?`;
    }
    clickBatman(e) {
        alert `Because I'm Batman!`;
    }

    render () {
        return (
            <div id="photo">
                <h1>Hero Cafe</h1>
                <div className = "hero" id = "superman" onClick={this.clickSuperman}></div>
                <div className = "hero" id = "blackPanther" onClick={this.clickBlackPanther}></div>
                <div className = "hero" id = "thor" onClick={this.clickThor}></div>
                <div className = "hero" id = "starLord" onClick={this.clickStarLord}></div>
                <div className = "hero" id = "groot" onClick={this.clickGroot}></div>
                <div className = "hero" id = "drax" onClick={this.clickDrax}></div>
                <div className = "hero" id = "batman" onClick={this.clickBatman}></div>

                <div>
                    <img src={heroImage} alt=""/>
                </div>
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