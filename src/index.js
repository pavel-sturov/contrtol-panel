import React from 'react'
import { render } from 'react-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { store } from 'redux/store'

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)

render(app, document.getElementById('root'))

serviceWorker.unregister()
