import React from 'react'
import { NavLink } from 'react-router-dom'
import { HOME, MY_PROJECTS, ABOUT_ME } from 'routes'

import ThemeToggle from '../theme-toggle'
import SNav from './styled'

const Nav = () => {
    return (
        <SNav>
            <h1>arie</h1>
            <NavLink to={HOME}>
                <button>main</button>
            </NavLink>
            <NavLink to={MY_PROJECTS}>
                <button>develop</button>
            </NavLink>
            <NavLink to={ABOUT_ME}>
                <button>read me</button>
            </NavLink>
            <ThemeToggle />
        </SNav>
    )
}

export default Nav
