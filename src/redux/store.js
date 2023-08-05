import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import postReducer from './reducers/postReducer'
import infoReducer from './reducers/infoReducer'


const rootReducers = combineReducers({
    postReducer: postReducer,
    infoReducer: infoReducer
})


const store = createStore(rootReducers, applyMiddleware(thunk))

export default store