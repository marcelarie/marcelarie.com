export const ThemeTypes = {
    CHANGE_THEME: 'CHANGE_THEME',
    DARK: 'DARK',
    LIGHT: 'LIGHT',
}

export type ThemePayloadType = typeof ThemeTypes.DARK | typeof ThemeTypes.LIGHT
