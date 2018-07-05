import React, { Component } from 'react';
import axios from 'axios';
import Todo from './Todo'


class App extends Component {
    constructor(){
        super();
        this.state = {
            todos: [],
            color: 'rebeccapurple',
            width: '100px',
            height: '100px'
        }
    }
    //these can be just like handleChange, handleSubmit, but don't need to be binded
    componentDidMount(){
        axios.get('https://api.vschool.io/marcus/todo').then(response => {
        this.setState({todos: response.data})
        })
        //code will run when the page is uploaded
        //one of the few times we use addEventListener in React
        window.addEventListener('keypress', (e) => {
            if(e.key === 'b'){
                this.setState({
                    color: 'cornflowerblue'
                })
            }else if(e.key === 'p'){
                this.setState({
                    color: 'rebeccapurple'
                })
                this.setState(prevState => ({
                    width: prevState.width === '100px' ? '50px' : '100px'
                }))
                this.setState(prevState => ({
                    height: prevState.width === '100px' ? '50px' : '100px'
                }))
            }else if(e.key === 'r'){
                this.setState({
                    color: 'red'
                })
                this.setState(prevState => ({
                    width: prevState.width === '100px' ? '50px' : '100px'
                }))
                this.setState(prevState => ({
                    height: prevState.width === '100px' ? '50px' : '100px'
                }))
            }
        })
    }
    componentWillUnmount(){
        window.removeEventListener('keypress')
    }

    render() {
        return(
            <div className='theBigDiv' style={{ 
                    backgroundColor: this.state.color,
                    color: 'white',
                    width: this.state.width,
                    height: this.state.height}}>
                Hello
                <Todo info={this.state.todos}/>
            </div>
        )
    }
}

export default App





//that App where we made the colors change in a div with keypresses and the width of the div toggle
//July 3 2018, taught by Nate
//When Nate made the colors change
// I also added Marcus's Axios with react into this one.  So this App is two lectures in one.  
//react axios
//purple red blue
//tension in the room