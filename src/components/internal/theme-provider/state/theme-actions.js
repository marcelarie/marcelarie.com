import { CHANGE_THEME } from "./theme-types"


export const changeTheme = payload => {
    return {
        type: CHANGE_THEME,
        payload
    }
}
