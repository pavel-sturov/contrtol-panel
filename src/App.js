import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom'
import 'typeface-roboto'
import { Routes } from 'routing'

const App = () => {
    return (
        <Router>
            <Switch>
                <Routes/>
            </Switch>
        </Router>
    )
}

export default App
