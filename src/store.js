import {createStore, applyMiddleware, combineReducers} from 'redux'
// import applyMiddleware from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import mediumReducer from './ducks/mediumReducer'
import hackerNewsReducer from './ducks/hackerNewsReducer'


const rootReducer = combineReducers({
    hackerNews: hackerNewsReducer,
    medium: mediumReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))