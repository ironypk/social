import {v1} from 'uuid';

export type DialogType = {
    id: string,
    name: string
}
export type ProfileInfoType = {
    fullName:string
    city:string
    about:string
    avatar:string
}

export type PostType = {
    id: string,
    likes: number,
    message: string
}
export type MessageType = {
    owner: string | 'you'
    message: string
    avatar: string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type ProfilePageType = {
    posts: Array<PostType>
    profileInfo:ProfileInfoType
}

export type FriendType = {
    id: string
    name: string
    image: string
}
export type RoutesType = {
    title: string
}

export type SideBarType = {
    routes : Array<RoutesType>
    friends?: Array<FriendType>
}

export type StateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    sideBar: SideBarType
}
export const state: StateType = {
    dialogsPage: {
        messages: [
            {
                owner: 'you', message: 'Привет,как дела?', avatar: 'Я'
            },
            {
                owner: 'viktor', message: 'Здаров,потихоньку', avatar: 'В'
            },
            {
                owner: 'viktor', message: 'А ты как?', avatar: 'В'
            }
        ],
        dialogs: [
            {
                id: v1(),
                name: 'Victor'
            },
            {
                id: v1(),
                name: 'Sam'
            },
            {
                id: v1(),
                name: 'Alena'
            }
        ]
    },
    profilePage: {
        posts: [{
            id: v1(),
            likes: 10,
            message: 'Коронавирус это плохо'
        }],
        profileInfo:{
            fullName:'Иванов Иван Иванович',
            city:'Москва',
            about:'Programmer',
            avatar:'И'
        }
    },
    sideBar: {
        routes : [
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
        ]
        ,
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
        ]
    }
}

