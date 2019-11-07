import {createStore, applyMiddleware} from 'redux'
import hackerNewsReducer from './ducks/hackerNewsReducer'
// import applyMiddleware from 'redux'
import promiseMiddleware from 'redux-promise-middleware'

export default createStore(hackerNewsReducer)