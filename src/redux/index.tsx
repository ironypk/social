import {combineReducers, createStore} from 'redux'
import dialogPageReducer, {DialogPageActionsTypes} from './reducers/dialogsPageReducer';
import profilePageReducer, {ProfilePageActionsTypes} from './reducers/profilePageReducer';
import {sidebarReducer} from './reducers/sidebarReducer';

const rootReducer = combineReducers({
    dialogsPage:dialogPageReducer,
    profilePage : profilePageReducer,
    sideBar : sidebarReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>
export type ActionsTypes = DialogPageActionsTypes | ProfilePageActionsTypes

const store = createStore(rootReducer)

export default store