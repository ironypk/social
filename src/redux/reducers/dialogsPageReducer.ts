import {DIALOG1_ID, DIALOG2_ID, MY_ID} from '../types';
import {DialogsEvents} from '../events';


export type DialogPageActionsTypes = ReturnType<typeof addDialogMessage>

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
}

export type DialogsPageType = typeof initialState


const dialogPageReducer = (state: DialogsPageType = initialState, action: DialogPageActionsTypes): DialogsPageType => {
    switch (action.type) {
        case DialogsEvents.ADD_DIALOG_MESSAGE:
                const newMessage: MessageType = {
                    message: action.payload.messageValue,
                    avatar: 'Я',
                    id: MY_ID
                }
                return {
                    ...state,
                    messages: {...state.messages, [action.payload.dialogID]: [...state.messages[action.payload.dialogID], newMessage]},
                }
        default:
            return state
    }
}


export const addDialogMessage = (payload:{dialogID:string,messageValue:string}) => {
    return {
        type: DialogsEvents.ADD_DIALOG_MESSAGE,
        payload
    } as const
}


export default dialogPageReducer