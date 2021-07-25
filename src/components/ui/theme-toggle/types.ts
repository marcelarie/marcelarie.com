export const ThemeTypes = {
    CHANGE_THEME: 'CHANGE_THEME',
    DARK: 'DARK',
    LIGHT: 'LIGHT',
};

export type ThemePayloadType = typeof ThemeTypes.DARK | typeof ThemeTypes.LIGHT;

export interface ChangeTheme {
    type: typeof ThemeTypes.CHANGE_THEME;
    payload: ThemePayloadType;
}

export type ThemeDispatchTypes = ChangeTheme;
