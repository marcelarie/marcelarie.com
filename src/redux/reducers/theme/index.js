import { ThemeTypes } from '../../types/theme'

const initialState = {
    theme: ThemeTypes.LIGHT,
}

const themeReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ThemeTypes.CHANGE_THEME:
            return { ...state, theme: payload }
        default:
            return state
    }
}

export default themeReducer
