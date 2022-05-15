import React from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch
} from 'react-router-dom'

import {
    Home, Main, Contact
} from './pages'
import { NavBar, Container } from './components'

function App() {
    return (
        <Router>
            <NavBar />
            <Container>
                <Switch>
                    <Route path='/' component={Home} exact/>
                    <Route path='/browse' component={Main} exact/>
                    <Route path='/contact' component={Contact} exact/>
                </Switch>
            </Container>
        </Router>
    )
}

export default App