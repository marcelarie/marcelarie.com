import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ABOUT_ME, HOME, MY_PROJECTS } from 'routes'

// Components
import Landing from '../../../pages/landing'
import MyProjects from '../../../pages/my-projects'
import AboutMe from '../../../pages/about-me'
import Nav from '../../../components/ui/nav'
import Footer from '../../../components/ui/footer'

const Router = () => {
    return (
        <div className="main-container">
            <BrowserRouter>
                <Nav />
                <Switch>
                    <Route exact path={HOME}>
                        <Landing />
                    </Route>
                    <Route path={MY_PROJECTS}>
                        <MyProjects />
                    </Route>
                    <Route path={ABOUT_ME}>
                        <AboutMe />
                    </Route>
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default Router
