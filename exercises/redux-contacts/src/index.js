import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import { Provider } from 'react-redux'
import store from './redux'

store.subscribe(() => {
    console.log(store.getState())
})

ReactDOM.render(
    <App />,
    document.getElementById('root')
);