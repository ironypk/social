import {v1} from 'uuid';

export type ProfilePageActionsTypes = ReturnType<typeof addPost>
    | ReturnType<typeof changeNewPostText>

export type ProfileInfoType = {
    fullName: string
    city: string
    about: string
    avatar: string
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
    profileInfo: {
        fullName: 'Иванов Иван Иванович',
        city: 'Москва',
        about: 'Programmer',
        avatar: 'И'
    } as ProfileInfoType,
    title: 'введите пост',
    newText: ''
}

export type ProfilePageType = typeof initialState


const profilePageReducer = (state: ProfilePageType = initialState, action: ProfilePageActionsTypes): ProfilePageType => {
    switch (action.type) {
        case 'ADD_POST':
            const newPost = {
                id: v1(),
                message: state.newText,
                likes: 0
            }
            return {...state, posts: [...state.posts, newPost], newText: ''}
        case 'CHANGE_NEW_POST_TEXT':
            return {...state, newText: action.text}
    }
    return state
}

export const addPost = () => {
    return {
        type: 'ADD_POST'
    } as const
}

export const changeNewPostText = (text: string) => {
    return {
        type: 'CHANGE_NEW_POST_TEXT',
        text
    } as const
}

export default profilePageReducer