import {v1} from 'uuid';
import {ProfilePageEvents} from '../events';
import {profileAPI} from '../../api/api';
import {Dispatch} from 'redux';
import {setErrorAC, setIsLoading} from './appReducer';

export type ProfileInfoType = {
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string | null
        large: string | null
    }
}

export type PostType = {
    id: string,
    likes: number,
    message: string
}


const initialState = {
    posts: [{
        id: v1(),
        likes: 10,
        message: 'Коронавирус это плохо'
    }] as Array<PostType>,
    profileInfo: {} as ProfileInfoType,
    status: '',
    isLoading: true
}

export type ProfilePageType = typeof initialState

type InferProfilePageActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
export type ProfilePageActionsTypes = InferProfilePageActionTypes<typeof profilePageAction>


const profilePageReducer = (state: ProfilePageType = initialState, action: ProfilePageActionsTypes): ProfilePageType => {
    switch (action.type) {
        case ProfilePageEvents.ADD_POST:
            const newPost = {
                id: v1(),
                message: action.postMessage,
                likes: 0
            }
            return {...state, posts: [...state.posts, newPost]}
        case ProfilePageEvents.SET_PROFILE :
            return {...state, profileInfo: {...action.profile}}
        case ProfilePageEvents.PROFILE_IS_LOADING:
            return {
                ...state, isLoading: action.predicate
            }
        case ProfilePageEvents.SET_STATUS :
            return {
                ...state, status: action.status
            }
        default:
            return state
    }
}

export const profilePageAction = {
    addPost: (postMessage: string) => {
        return {
            type: ProfilePageEvents.ADD_POST,
            postMessage
        } as const
    },
    setProfile: (profile: ProfileInfoType) => {
        return {
            type: ProfilePageEvents.SET_PROFILE,
            profile
        } as const
    },

    setLoading: (predicate: boolean) => {
        return {
            type: ProfilePageEvents.PROFILE_IS_LOADING,
            predicate
        } as const
    },
    setStatus: (status: string) => {
        return {
            type: ProfilePageEvents.SET_STATUS,
            status
        } as const
    }
}

export const setProfile = (userID: string | number) => (dispatch: Dispatch) => {
    dispatch(profilePageAction.setLoading(true))
    profileAPI.getProfile(userID)
        .then(response => {
                dispatch(profilePageAction.setProfile(response))
            dispatch(profilePageAction.setLoading(false))
            }
        ).catch(e => {
        dispatch(setErrorAC([e.message]))
        dispatch(profilePageAction.setLoading(false))
    })
}


export const updateStatusTC = (status: string) => async (dispatch: Dispatch) => {
    try {
        const res = await profileAPI.updateStatus(status)
        res.resultCode === 0 && dispatch(profilePageAction.setStatus(status))

    } catch (e) {
        console.error(e)
    }
}

export const getStatusTC = (userID: string | number) => async (dispatch: Dispatch) => {
    setIsLoading(true)
    try {
        const data = await profileAPI.getStatus(userID)
        dispatch(profilePageAction.setStatus(data))

    } catch (e) {
        console.error(e)
    }
    setIsLoading(false)
}


export default profilePageReducer


