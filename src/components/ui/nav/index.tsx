import { NavLink } from 'react-router-dom'
import { HOME, MY_PROJECTS, ABOUT_ME } from 'routes'

import ThemeToggle from '../theme-toggle'
import SNav from './styled'
import './styles.scss'

const Nav = () => {
    return (
        <SNav>
            <h1>Marcel Arie</h1>
            <NavLink to={HOME}>
                <button>Main</button>
            </NavLink>
            <NavLink to={MY_PROJECTS}>
                <button>Develop</button>
            </NavLink>
            <NavLink to={ABOUT_ME}>
                <button>Read Me</button>
            </NavLink>
            <ThemeToggle />
        </SNav>
    )
}

export default Nav
