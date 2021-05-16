import { ThemeTypes, ThemePayloadType} from '../../types/theme'



export const changeTheme = (payload: ThemePayloadType) => {
    return {
        type: ThemeTypes.CHANGE_THEME,
        payload,
    }
}
