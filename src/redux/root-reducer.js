import { combineReducers } from 'redux'

//----> REDUCERS
import themePicker from 'components/internal/theme-provider/state/theme-reducer'

const rootReducer = combineReducers({
    themePicker,
})

export default rootReducer
