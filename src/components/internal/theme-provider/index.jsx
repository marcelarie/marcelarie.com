import React from 'react'
import { ThemeProvider as Provider } from 'styled-components'
import GlobalStyles from 'styles/global'
import { dark, light } from 'styles/theme'

const ThemeProvider = ({ children }) => {
    return (
        <Provider theme={dark}>
            <GlobalStyles>{children}</GlobalStyles>
        </Provider>
    )
}

export default ThemeProvider
