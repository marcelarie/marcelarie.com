import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { HOME } from 'routes'

// Components
import Landing from 'pages/landing'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={HOME}>
                    <Landing />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router
