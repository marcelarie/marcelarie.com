import { NavLink, useLocation } from 'react-router-dom'
import { HOME, MY_PROJECTS, ABOUT_ME, RoutesTypes } from 'routes'

import ThemeToggle from '../theme-toggle'
import SNav from './styled'
import './styles.scss'
import Button from '../../../styles/generic/button'

const Nav = () => {
        const currentLocation = useLocation().pathname
    const handlePathFocus = (path: RoutesTypes) => {
        console.log(currentLocation)
        return currentLocation === path ? 'navfocus' : ''
    }

    return (
        <SNav>
            <NavLink to={HOME}>
                <h1>Marcel Arie</h1>
            </NavLink>
            <NavLink className={handlePathFocus(HOME)} to={HOME}>
                <Button>Main</Button>
            </NavLink>
            <NavLink className={handlePathFocus(MY_PROJECTS)} to={MY_PROJECTS}>
                <Button>Develop</Button>
            </NavLink>
            <NavLink className={handlePathFocus(ABOUT_ME)} to={ABOUT_ME}>
                <Button>Read Me</Button>
            </NavLink>
            <ThemeToggle />
        </SNav>
    )
}

export default Nav
