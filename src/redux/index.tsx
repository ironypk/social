import {applyMiddleware, combineReducers, createStore} from 'redux'
import dialogPageReducer from './reducers/dialogsPageReducer';
import profilePageReducer from './reducers/profilePageReducer';
import {sidebarReducer} from './reducers/sidebarReducer';
import {usersPageReducer} from './reducers/usersPageReducer';
import {authReducer} from './reducers/authReducer';
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import {appReducer} from './reducers/appReducer';

const rootReducer = combineReducers({
    dialogsPage:dialogPageReducer,
    profilePage : profilePageReducer,
    usersPage:usersPageReducer,
    sideBar : sidebarReducer,
    auth:authReducer,
    form:formReducer,
    app:appReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer,applyMiddleware(thunkMiddleware))

export default store