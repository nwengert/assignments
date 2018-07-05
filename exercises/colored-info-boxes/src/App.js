import React, { Component } from 'react';
import Card from './Card'


class App extends Component {
    render() {
        return(
            <div className='bigDiv'>
                1<Card                     
                    fontColor = 'red'/>
                2<Card 
                    backgroundColor = 'green'
                    fontColor = 'white'/>
                3<Card 
                    backgroundColor = 'rebeccapurple'
                    fontColor = 'white'/>
                4<Card 
                    backgroundColor = 'pink'
                    fontColor = 'green'/>
                5<Card 
                    backgroundColor = 'lightgreen'
                    fontColor = 'black'/>
                6<Card 
                    backgroundColor = 'orange'
                    fontColor = 'red'/>
                7<Card 
                    backgroundColor = 'dodgerblue'
                    fontColor = 'white'/>
                8<Card 
                    backgroundColor = 'yellow'
                    fontColor = 'blue'/>
                9<Card 
                    backgroundColor = 'purple'
                    fontColor = 'pink'/>
                10<Card 
                    backgroundColor = 'brown'
                    fontColor = 'lightgreen'/>
            </div>
        )
    }
}

export default App


//this one I got done with the help of nate the day before the 4th of july
//the one where I had the props mixed of of where they should be, in the App or the Component
//props in the App getting passed to the Component
//the one with background and font colors
//background colors passed through props