import { ThemeTypes, ThemePayloadType} from './theme-types'



export const changeTheme = (payload: ThemePayloadType) => {
    return {
        type: ThemeTypes.CHANGE_THEME,
        payload,
    }
}
