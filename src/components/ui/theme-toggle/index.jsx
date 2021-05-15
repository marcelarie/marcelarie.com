import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { changeTheme } from 'components/internal/theme-provider/state/theme-actions'
import { DARK, LIGHT } from 'components/internal/theme-provider/state/theme-types'

const ThemeToggle = () => {
    const dispatch = useDispatch()
    const { theme } = useSelector(({ themePicker }) => themePicker)

    const toggle = theme === DARK ? LIGHT : DARK

    const handleChangeTheme = () => {
        dispatch(changeTheme(toggle))
    }

    if (theme === LIGHT) {
        return (
            <div className="darkLightToggle">
                <button onClick={handleChangeTheme} type="button">
                    <span aria-label="dark" value="moon" role="img">
                        🌚
                    </span>
                </button>
            </div>
        )
    }
    return (
        <div className="darkLightToggle">
            <button onClick={handleChangeTheme} type="button">
                <span aria-label="light" value="sun" role="img">
                    🌞
                </span>
            </button>
        </div>
    )
}

export default ThemeToggle
