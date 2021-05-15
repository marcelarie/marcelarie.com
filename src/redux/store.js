import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './root-reducer.js'

const middlewares = [thunk]

// prettier-ignore
const store = createStore(
    rootReducer, 
    composeWithDevTools(
        applyMiddleware(...middlewares)
))

export default store
