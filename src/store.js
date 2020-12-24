import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { characterDetailsReducer, characterListReducer } from './reducers/itemreducers'

const reducer = combineReducers({
    characterList : characterListReducer,
    characterDetails: characterDetailsReducer
})

const initialState = {}

const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;