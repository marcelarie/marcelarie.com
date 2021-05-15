import Router from 'components/internal/router'
import Theme from 'components/internal/theme-provider'

import 'styles/reset.scss'
import 'styles/fonts.scss'

const App = () => {
    return (
        <Theme className="app">
            <Router />
        </Theme>
    )
}

export default App
