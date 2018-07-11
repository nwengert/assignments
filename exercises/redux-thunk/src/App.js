import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTodos, addTodo } from './redux';
import Todo from './Todo.js'




class App extends Component {
    constructor(){
        super();
        this.state = {
            title: '',
            description: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo( this.state )
        this.setState({
            title: '',
            description: ''
        })
        console.log(this.state)
    }
    handleDelete = e => {

    }

    componentDidMount(){
        this.props.getTodos()
    }

    render(){
        console.log(this.props)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" 
                            placeholder='Enter Todo'
                            value={ this.state.title} 
                            name='title' 
                            onChange={ this.handleChange }/>
                    <input type="text" 
                            placeholder='Enter Description'
                            value={ this.state.description} 
                            name='description' 
                            onChange={ this.handleChange }/>
                    <button>Submit</button>
                </form>
                <h1>Todos</h1>
                { this.props.todos.map(todo => {
                    return(
                        <Todo { ...todo} />
                    )
                })
                }
            </div>
        )
    }
}

export default connect(state=>state, { getTodos, addTodo })(App)