import App from './App'
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
//redux
import { Provider } from 'react-redux'
import store from './redux'

render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)