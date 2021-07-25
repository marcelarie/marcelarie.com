// import { useSelector } from 'react-redux';
import { AppContext } from 'App';
import { ThemeTypes } from 'components/ui/theme-toggle/types';
import { useContext } from 'react';
import { ThemeProvider as Provider } from 'styled-components';

import GlobalStyles from '../../../styles/global';
import { dark, light } from '../../../styles/theme';
import { Props } from './types';

const ThemeProvider = ({ children }: Props) => {
    const { theme } = useContext(AppContext);

    const themeCondition = theme === ThemeTypes.DARK ? dark : light;

    return (
        <Provider theme={themeCondition}>
            <GlobalStyles>{children}</GlobalStyles>
        </Provider>
    );
};

export default ThemeProvider;
