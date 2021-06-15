import {AppEvents} from '../events';
import {Dispatch} from 'redux';
import {setUserDataTC} from './authReducer';

type AppReducerType = {
    error: string [] | null
    isLoading: boolean
    initializing: boolean
}

const initialState: AppReducerType = {
    error: null,
    isLoading: true,
    initializing: false
}


export type AppReducerActionType = ReturnType<typeof setErrorAC | typeof setIsLoading | typeof setSuccessInitialize>

export const appReducer = (state = initialState, action: AppReducerActionType): AppReducerType => {
    switch (action.type) {
        case AppEvents.SET_ERROR_MESSAGE:
            return {...state, error: action.errorMessages}
        case AppEvents.SET_IS_LOADING:
            return {
                ...state, isLoading: action.predicate
            }
        case AppEvents.SET_SUCCESS_INITIALIZE:
            return {
                ...state, initializing: true
            }
        default:
            return state
    }
}


export const setSuccessInitialize = () => {
    return {
        type: AppEvents.SET_SUCCESS_INITIALIZE
    } as const
}

export const initializingTC = () => (dispatch: Dispatch<any>) => {
    const promise = dispatch(setUserDataTC())
    Promise.all([promise]).then(() => {
        dispatch(setSuccessInitialize())
    })
}


export const setErrorAC = (errorMessages: string[] | null) => {
    return {
        type: AppEvents.SET_ERROR_MESSAGE,
        errorMessages
    } as const
}


export const setIsLoading = (predicate: boolean) => {
    return {
        type: AppEvents.SET_IS_LOADING,
        predicate
    } as const

}