import { ThemeTypes } from './types';
import { useContext } from 'react';
import { AppContext } from 'App';

const ThemeToggle = () => {
    const { DARK, LIGHT } = ThemeTypes;
    const { setTheme, theme } = useContext(AppContext);

    const toggle = theme === DARK ? LIGHT : DARK;

    const handleChangeTheme = () => {
        setTheme && setTheme(toggle);
        localStorage.setItem('theme', toggle);
    };

    if (theme === LIGHT) {
        return (
            <div className="darkLightToggle">
                <button onClick={handleChangeTheme} type="button">
                    <span aria-label="dark" data-value="moon" role="img">
                        🌚
                    </span>
                </button>
            </div>
        );
    }
    return (
        <div className="darkLightToggle">
            <button onClick={handleChangeTheme} type="button">
                <span aria-label="light" data-value="sun" role="img">
                    🌞
                </span>
            </button>
        </div>
    );
};

export default ThemeToggle;
