import React from 'react'
import ThemeToggle from 'components/ui/theme-toggle'

import SNav from './styled'

const Nav = () => {
    return (
        <SNav>
            <h1>arie</h1>
            <button>main</button>
            <button>develop</button>
            <button>read me</button>
            <button>dark theme toggle</button>
            <ThemeToggle/>
        </SNav>
    )
}

export default Nav
