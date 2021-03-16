import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {CssBaseline} from '@material-ui/core'
import {StylesProvider} from '@material-ui/styles'
import {BrowserRouter} from 'react-router-dom';
import {v1} from 'uuid';

export type DialogType = {
    id: string,
    name: string
}

export type PostType = {
    id?: string,
    likes: number,
    message: string
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<string>
}

export type ProfilePageType = {
    posts: Array<PostType>
}

export type StateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
}


const state:StateType = {
    dialogsPage: {
        messages: ['Как дела', 'Нормально', 'Нормально нереально'],
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
        },
            {
                id: v1(),
                likes: 7,
                message: 'Я люблю клубнику'
            },
            {
                id: v1(),
                likes: 1,
                message: 'Пеку пирожки'
            }]
    }
}

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <StylesProvider injectFirst>
                <CssBaseline/>
                <App {...state}></App>
            </StylesProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();