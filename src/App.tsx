import { QueryClient, QueryClientProvider } from 'react-query';
import Router from './components/internal/router';
import Theme from './components/internal/theme-provider';

import 'styles/reset.scss';
import 'styles/fonts.scss';


const App = () => {
    const queryclient = new QueryClient();
    return (
        <QueryClientProvider client={queryclient}>
            <Theme>
                <Router />
            </Theme>
        </QueryClientProvider>
    );
};

export default App;
