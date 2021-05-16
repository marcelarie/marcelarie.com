import { useDispatch, useSelector } from 'react-redux'

import { changeTheme } from '../../../redux/actions/theme'
import { ThemeTypes } from '../../../redux/types/theme'
import { RootState } from '../../../redux/root-reducer/types'

const ThemeToggle = () => {
    const {DARK, LIGHT} = ThemeTypes
    const dispatch = useDispatch()
    const { theme } = useSelector(({ themePicker }: RootState) => themePicker)

    const toggle = theme === DARK ? LIGHT : DARK

    const handleChangeTheme = () => {
        dispatch(changeTheme(toggle))
    }

    if (theme === LIGHT) {
        return (
            <div className="darkLightToggle">
                <button onClick={handleChangeTheme} type="button">
                    <span aria-label="dark" data-value="moon" role="img">
                        🌚
                    </span>
                </button>
            </div>
        )
    }
    return (
        <div className="darkLightToggle">
            <button onClick={handleChangeTheme} type="button">
                <span aria-label="light" data-value="sun" role="img">
                    🌞
                </span>
            </button>
        </div>
    )
}

export default ThemeToggle
