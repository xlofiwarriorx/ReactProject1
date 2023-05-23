import {configureStore} from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit'
import { profileReducer } from './profile-reducer'
import  {dialogsReducer} from './dialogs-reducer'
import { usersReducer } from './users-reducer'
import authReducer from './auth-reducer'



const reducers = combineReducers({
	profile: profileReducer,
	dialogs: dialogsReducer,
	users: usersReducer,
	auth: authReducer
 })
let store = configureStore({
	reducer: reducers,
})

export default store;
