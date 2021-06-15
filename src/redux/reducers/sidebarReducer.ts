import {v1} from 'uuid';

export type FriendType = {
    id: string
    name: string
    image: string
}
export type RouteType = {
    title: string
}

const initialState = {
    routes: [
        {
            title: 'Profile'
        },
        {
            title: 'Dialogs'
        },
        {
            title: 'Settings'
        },
        {
            title: 'Friends',
        },
        {
            title:'Users'
        }
    ] as Array<RouteType>,
    friends: [
        {
            id: v1(),
            name: 'Витя',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-rkY4tPNj7RorBnXjj1HNu4TsPcq5CdkPQ&usqp=CAU'
        },
        {
            id: v1(),
            name: 'Маша',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-rkY4tPNj7RorBnXjj1HNu4TsPcq5CdkPQ&usqp=CAU'
        },
        {
            id: v1(),
            name: 'Петя',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-rkY4tPNj7RorBnXjj1HNu4TsPcq5CdkPQ&usqp=CAU'

        },
        {
            id: v1(),
            name: 'Петя',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-rkY4tPNj7RorBnXjj1HNu4TsPcq5CdkPQ&usqp=CAU'

        },
        {
            id: v1(),
            name: 'Петя',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-rkY4tPNj7RorBnXjj1HNu4TsPcq5CdkPQ&usqp=CAU'

        },
        {
            id: v1(),
            name: 'Петя',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-rkY4tPNj7RorBnXjj1HNu4TsPcq5CdkPQ&usqp=CAU'

        },
        {
            id: v1(),
            name: 'Петя',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-rkY4tPNj7RorBnXjj1HNu4TsPcq5CdkPQ&usqp=CAU'

        },
    ] as Array<FriendType>
}


export type SideBarType = typeof initialState



export const sidebarReducer = (state:SideBarType = initialState):SideBarType => {
    return state
}