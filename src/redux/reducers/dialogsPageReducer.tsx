import {DIALOG1_ID, DIALOG2_ID, MY_ID} from '../types';


export type DialogPageActionsTypes = ReturnType<typeof changeNewDialogMessage>
    | ReturnType<typeof addDialogMessage>

export type DialogType = {
    id: string,
    name: string
}
export type MessageType = {
    id: string
    message: string
    avatar: string
}
export type MessagesType = {
    [key: string]: Array<MessageType>
}

const initialState = {
    dialogs: [
        {
            id: DIALOG1_ID,
            name: 'Victor'
        },
        {
            id: DIALOG2_ID,
            name: 'Sam'
        },
    ] as Array<DialogType>,
    messages: {
        [DIALOG1_ID]: [
            {
                id: MY_ID, message: 'Привет,как дела?', avatar: 'Я'
            },
            {
                id: DIALOG1_ID, message: 'Здаров,потихоньку', avatar: 'В'
            },
            {
                id: DIALOG1_ID, message: 'А ты как?', avatar: 'В'
            }
        ],
        [DIALOG2_ID]: [
            {
                id: MY_ID, message: 'Кукусики', avatar: 'Я'
            },
            {
                id: DIALOG2_ID, message: 'Привет,мужик', avatar: 'S'
            },
            {
                id: DIALOG2_ID, message: 'Ты самый лучший', avatar: 'S'
            }
        ]
    } as MessagesType,
    my_ID: MY_ID,
    newMessageText: '',
    title: 'введите сообщение'
}

export type DialogsPageType = typeof initialState


const dialogPageReducer = (state: DialogsPageType = initialState, action: DialogPageActionsTypes): DialogsPageType => {
    switch (action.type) {
        case 'ADD_DIALOG_MESSAGE':
            const newMessage: MessageType = {
                message: state.newMessageText,
                avatar: 'Я',
                id: MY_ID
            }
            return {
                ...state,
                messages: {...state.messages, [action.id]: [...state.messages[action.id], newMessage]},
                newMessageText: ''
            }
        case 'CHANGE_NEW_DIALOG_MESSAGE':
            return {...state, newMessageText: action.text}
    }
    return state
}

export const changeNewDialogMessage = (text: string) => {
    return {
        type: 'CHANGE_NEW_DIALOG_MESSAGE',
        text
    } as const
}

export const addDialogMessage = (id: string) => {
    return {
        type: 'ADD_DIALOG_MESSAGE',
        id
    } as const
}


export default dialogPageReducer