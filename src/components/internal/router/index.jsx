import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { HOME } from 'routes'

// Components
import Landing from 'pages/landing'
import Nav from 'components/ui/nav'
import Footer from 'components/ui/footer'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={HOME}>
                    <Nav />
                    <Landing />
                    <Footer/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router
