import { combineReducers } from 'redux' 
import AppReducer from './AppReducer' 
import {  routerReducer } from 'react-router-redux'

export default combineReducers({ 
	routing: routerReducer,
    AppReducer
})
