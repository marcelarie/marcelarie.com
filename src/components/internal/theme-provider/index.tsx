import { useSelector } from 'react-redux'
import { ThemeProvider as Provider } from 'styled-components'

import { RootState } from '../../../redux/root-reducer/types'
import { ThemeTypes } from '../../../redux/state/theme/theme-types'
import GlobalStyles from '../../../styles/global'
import { dark, light } from '../../../styles/theme'
import { Props } from './types'

const ThemeProvider = ({ children }: Props) => {
    const { theme } = useSelector(({ themePicker }: RootState) => themePicker)

    const themeCondition = theme === ThemeTypes.DARK ? dark : light

    return (
        <Provider theme={themeCondition}>
            <GlobalStyles>{children}</GlobalStyles>
        </Provider>
    )
}

export default ThemeProvider
