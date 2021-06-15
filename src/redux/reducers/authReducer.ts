import {AuthEvents} from '../events';
import {authMe} from '../../api/api';
import {Action, Dispatch} from 'redux';
import {ILogin} from '../../components/Login/Login';
import {setErrorAC, setIsLoading} from './appReducer';

export type AuthStateType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isLogin: boolean
}

export type AuthActionType = ReturnType<typeof setUserData | typeof setIsLoading | typeof setErrorAC>

const initialState: AuthStateType = {
    id: null,
    email: null,
    login: null,
    isLogin: false
}

export const authReducer = (state = initialState, action: AuthActionType) => {
    switch (action.type) {
        case AuthEvents.SET_USER_DATA:
            return {...state, ...action.payload}
        default :
            return state
    }
}


export const setUserData = (payload: { id: number | null, email: string | null, login: string | null, isLogin: boolean }) => {
    return {
        type: AuthEvents.SET_USER_DATA,
        payload
    } as const
}

export const setUserDataTC = () => async (dispatch: Dispatch<AuthActionType>) => {
    dispatch(setIsLoading(true))
    try {
        const response = await authMe.me()
        if (response.resultCode === 0) {
            dispatch(setUserData({...response.data, isLogin: true}))
        } else {
            dispatch(setErrorAC(response.messages))
        }
        dispatch(setIsLoading(false))
        return response
    } catch (e) {
        dispatch(setErrorAC([e.message]))
    }
}


export const loginTC = (data: ILogin) => async (dispatch: Dispatch<any>) => {
    try {
        const response = await authMe.login(data)
        if (response.resultCode === 0) {
            dispatch(setUserDataTC())
        } else {
            dispatch(setErrorAC(response.messages))
        }
    } catch (e) {
        dispatch(setErrorAC([e.message]))
    }
}


export const logoutTC = () => (dispatch: Dispatch) => {
    return authMe.logout()
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(setUserData({id: null, email: null, login: null, isLogin: false}))
            } else {
                dispatch(setErrorAC(response.messages))
            }
        }).catch(e => dispatch(setErrorAC([e.message])))
}


