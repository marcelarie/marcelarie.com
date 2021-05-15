import Router from 'components/internal/router'
import Theme from 'components/internal/theme-provider'
import Nav from 'components/ui/nav'
import Footer from 'components/ui/footer'

import 'styles/reset.scss'
import 'styles/fonts.scss'

const App = () => {
    return (
        <Theme className="app">
            <Nav />
            <Router />
            <Footer />
        </Theme>
    )
}

export default App
