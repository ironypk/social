import {v1} from 'uuid';
import profilePageReducer, {
    PostType,
    ProfileInfoType, profilePageAction,
    ProfilePageType
} from './profilePageReducer';

let state = {} as ProfilePageType

beforeEach(() => {
    state = {

        posts: [{
            id: v1(),
            likes: 10,
            message: 'Коронавирус это плохо'
        }] as Array<PostType>,
        profileInfo: {
            userId: 1,
            photos: {
                small: null,
                large: null
            },
            fullName: 'Alena',
            contacts: {},
            lookingForAJob: true,
            lookingForAJobDescription: 'lala'
        } as ProfileInfoType,
        isLoading: true,
        status: '123'
    }
})

test('post should be add', () => {

    const newText = 'Hello world'

    const newState = profilePageReducer(state, profilePageAction.addPost(newText))

    expect(state !== newState).toBe(true)
    expect(state.posts !== newState.posts).toBe(true)
    expect(newState.posts.length).toBe(2)
})
