import { CHANGE_THEME,  LIGHT } from './theme-types.js'

const initialState = {
    theme: LIGHT,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case CHANGE_THEME:
            return { ...state, theme: payload }
        default:
            return state
    }
}
