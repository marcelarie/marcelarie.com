import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Router from './components/internal/router';
import Theme from './components/internal/theme-provider';

import 'styles/reset.scss';
import 'styles/fonts.scss';
import { useState } from 'react';

type ContextT = {
    theme: string;
    setTheme?: React.Dispatch<React.SetStateAction<string>>;
};

export const AppContext: React.Context<ContextT> = React.createContext({
    theme: 'DARK',
});

const App = () => {
    const queryclient = new QueryClient();
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'DARK');
    console.log(theme);
    return (
        <AppContext.Provider value={{ theme, setTheme }}>
            <QueryClientProvider client={queryclient}>
                <Theme>
                    <Router />
                </Theme>
            </QueryClientProvider>
        </AppContext.Provider>
    );
};

export default App;
