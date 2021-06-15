import {follow, setUsers, unFollow, usersPageReducer, UsersPageType, UserType} from './usersPageReducer';

let state = {} as UsersPageType

beforeEach(() => {
    state = {
        users: [],
        totalCount: 0,
        error: null,
        isLoading: false,
        currentPage: 1,
        pageSize: 10,
        followingProgress: []
    }
})


test('users should be add', () => {
    const users = [
        {
            id: 1,
            name: 'Alena',
            photos: {
                small: 'https://semantica.in/wp-content/uploads/2018/08/av-427845-1.png',
                large: 'https://semantica.in/wp-content/uploads/2018/08/av-427845-1.png'
            },
            followed: true,
            status: 'love love love'
        },
        {
            id: 2,
            photos: {
                large: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyX25BdGPsa--NkHQCA8qjYs3pwHsxnxWkiw&usqp=CAU',
                small: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyX25BdGPsa--NkHQCA8qjYs3pwHsxnxWkiw&usqp=CAU'
            },
            followed: false,
            name: 'Vasya',
            status: 'tututu'
        },
        {
            id: 3,
            photos: {
                small: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjid92J_nzTrXLpCkKDBN5uMKEo--OU3IX_w&usqp=CAU',
                large: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjid92J_nzTrXLpCkKDBN5uMKEo--OU3IX_w&usqp=CAU'
            },
            followed: true,
            name: 'Ivan',
            status: 'hello world'
        }
    ]
    const newState = usersPageReducer(state, setUsers(users))
    expect(newState.users.length).toBe(3)
})

test('user should be followed', () => {
    state.users = [
        {
            id: 1,
            name: 'Alena',
            photos: {
                small: 'https://semantica.in/wp-content/uploads/2018/08/av-427845-1.png',
                large: 'https://semantica.in/wp-content/uploads/2018/08/av-427845-1.png'
            },
            followed: true,
            status: 'love love love'
        },
        {
            id: 2,
            photos: {
                large: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyX25BdGPsa--NkHQCA8qjYs3pwHsxnxWkiw&usqp=CAU',
                small: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyX25BdGPsa--NkHQCA8qjYs3pwHsxnxWkiw&usqp=CAU'
            },
            followed: false,
            name: 'Vasya',
            status: 'tututu'
        },
        {
            id: 3,
            photos: {
                small: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjid92J_nzTrXLpCkKDBN5uMKEo--OU3IX_w&usqp=CAU',
                large: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjid92J_nzTrXLpCkKDBN5uMKEo--OU3IX_w&usqp=CAU'
            },
            followed: true,
            name: 'Ivan',
            status: 'hello world'
        }
    ]
    const newState = usersPageReducer(state, follow(2))
    expect(state !== newState).toBe(true)
    expect(newState.users[1].followed).toBe(true)
})

test('user should be unFollowed', () => {
    state.users = [
        {
            id: 1,
            name: 'Alena',
            photos: {
                small: 'https://semantica.in/wp-content/uploads/2018/08/av-427845-1.png',
                large: 'https://semantica.in/wp-content/uploads/2018/08/av-427845-1.png'
            },
            followed: true,
            status: 'love love love'
        },
        {
            id: 2,
            photos: {
                large: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyX25BdGPsa--NkHQCA8qjYs3pwHsxnxWkiw&usqp=CAU',
                small: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyX25BdGPsa--NkHQCA8qjYs3pwHsxnxWkiw&usqp=CAU'
            },
            followed: false,
            name: 'Vasya',
            status: 'tututu'
        },
        {
            id: 3,
            photos: {
                small: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjid92J_nzTrXLpCkKDBN5uMKEo--OU3IX_w&usqp=CAU',
                large: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjid92J_nzTrXLpCkKDBN5uMKEo--OU3IX_w&usqp=CAU'
            },
            followed: true,
            name: 'Ivan',
            status: 'hello world'
        }
    ]
    const newState = usersPageReducer(state, unFollow(1))
    expect(state !== newState).toBe(true)
    expect(newState.users[0].followed).toBe(false)
})
