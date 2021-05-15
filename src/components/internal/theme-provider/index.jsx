import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider as Provider } from 'styled-components'
import GlobalStyles from 'styles/global'
import { dark, light } from 'styles/theme'
import { DARK } from './state/theme-types'

const ThemeProvider = ({ children }) => {
    const { theme } = useSelector(({ themePicker }) => themePicker)

    const themeCondition = theme === DARK ? dark : light;

    return (
        <Provider theme={themeCondition}>
            <GlobalStyles>{children}</GlobalStyles>
        </Provider>
    )
}

export default ThemeProvider
