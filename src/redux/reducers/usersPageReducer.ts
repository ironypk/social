import {UsersEvents} from '../events';
import {Dispatch} from 'redux';
import {followAPI, usersAPI} from '../../api/api';
import {setIsLoading} from './appReducer';

export type UserType = {
    id: number
    name: string
    status: string
    photos: {
        small: string | null
        large: string | null
    }
    followed: boolean
}

export type UsersResponseType = {
    items: Array<UserType>,
    totalCount: number,
    error: string
}

export type UsersPageType = {
    users: Array<UserType>
    totalCount: number
    currentPage: number
    pageSize: number
    isLoading: boolean
    followingProgress: number[]
    error: string | null
}

export type UserActionType =
    ReturnType<typeof setUsers
        | typeof follow
        | typeof unFollow
        | typeof setCurrentPage
        | typeof setTotalCountUsers
        // | typeof setIsLoading
        | typeof setFollowingProgress>


const initialState: UsersPageType = {
    users: [],
    totalCount: 0,
    currentPage: 1,
    pageSize: 10,
    isLoading: false,
    followingProgress: [],
    error: null
}


type HandlersType = {
    [key in UsersEvents | 'DEFAULT']: (state: UsersPageType, action: any) => UsersPageType
}
const handlers: HandlersType = {
    [UsersEvents.FOLLOW]: (state, action) => {
        return {...state, users: state.users.map(u => u.id === action.id ? {...u, followed: true} : u)}
    },
    [UsersEvents.SET_USERS]: (state, action) => {
        return {...state, users: [...action.users]}
    },
    [UsersEvents.UNFOLLOW]: (state, action) => {
        return {...state, users: state.users.map(u => u.id === action.id ? {...u, followed: false} : u)}
    },
    [UsersEvents.SET_CURRENT_PAGE]: (state, action) => {
        return {...state, currentPage: action.currentPage}
    },
    [UsersEvents.SET_TOTAL_COUNT_USERS]: (state, action) => {
        return {...state, totalCount: action.count}
    },
    [UsersEvents.USERS_IS_LOADING]: (state, action) => {
        return {...state, isLoading: action.predicate}
    },
    [UsersEvents.SET_FOLLOWING_PROGRESS]: (state, action) => {
        return {
            ...state,
            followingProgress:
                action.followingStatus
                    ? [...state.followingProgress, action.userID]
                    : state.followingProgress.filter(id => id !== action.userID)
        }
    },
    'DEFAULT': (state) => state
}


export const usersPageReducer = (state: UsersPageType = initialState, action: UserActionType): UsersPageType => {
    const handler = handlers[action.type] || handlers['DEFAULT']
    return handler(state, action)

}


export const follow = (id: number) => {
    return <const>{
        type: UsersEvents.FOLLOW,
        id
    }
}
export const unFollow = (id: number) => {
    return {
        type: UsersEvents.UNFOLLOW,
        id
    }
}
export const setUsers = (users: Array<UserType>) => {
    return {
        type: UsersEvents.SET_USERS,
        users
    }
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: UsersEvents.SET_CURRENT_PAGE,
        currentPage
    }
}
export const setTotalCountUsers = (count: number) => {
    return {
        type: UsersEvents.SET_TOTAL_COUNT_USERS,
        count
    }
}
// export const setIsLoading = (predicate: boolean) => {
//     return {
//         type: UsersEvents.USERS_IS_LOADING,
//         predicate
//     }
// }
export const setFollowingProgress = (userID: number, followingStatus: boolean) => {
    return {
        type: UsersEvents.SET_FOLLOWING_PROGRESS,
        userID,
        followingStatus
    }
}


export const getUsers = (currentPage: number, pageSize: number) => async (dispatch: Dispatch) => {
    dispatch(setIsLoading(true))
    try {
        const {items, totalCount} = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(setUsers(items))
        dispatch(setTotalCountUsers(totalCount))
    } catch (e) {
        console.log(e)
    }
    dispatch(setIsLoading(false))
}

export const unFollowTC = (id: number) => async (dispatch: Dispatch) => {
    dispatch(setFollowingProgress(id, true))
    try {
        const response = await followAPI.unFollow(id)
        response.resultCode === 0 && dispatch(unFollow(id))
    } catch (e) {
        console.log(e)
    }
    dispatch(setFollowingProgress(id, false))
}

export const followTC = (id: number) => async (dispatch: Dispatch) => {
    dispatch(setFollowingProgress(id, true))
    try {
        const response = await followAPI.follow(id)
        response.resultCode === 0 && dispatch(follow(id))
    } catch (e) {
        console.log(e)
    }
    dispatch(setFollowingProgress(id, false))
}
