import { ThemeTypes, ThemeDispatchTypes } from './theme-types'

const initialState = {
    theme: ThemeTypes.LIGHT,
}

const themeReducer = (state = initialState, {type, payload}: ThemeDispatchTypes) => {
    switch (type) {
        case ThemeTypes.CHANGE_THEME:
            return { ...state, theme: payload }
        default:
            return state
    }
}

export default themeReducer
