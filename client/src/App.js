import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
    BrowserRouter as Router, 
    Route, 
    Switch
} from 'react-router-dom'
import {
    Home, Main, Contact
} from './pages'
import { NavBar, Container } from './components'

import {getProducts} from './actions/products'

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
        console.log("fut az app")
    }, [dispatch])

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
