import {v1} from 'uuid';
import dialogPageReducer, {
    addDialogMessage,
    changeNewDialogMessage, DialogsPageType,
    DialogType,
    MessagesType
} from './dialogsPageReducer';

const MY_ID = v1()
const DIALOG1_ID = v1()
const DIALOG2_ID = v1()
let state = {} as DialogsPageType

beforeEach(() => {
    state = {
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
})

test('dialog message should be add', () => {

    const newMessageText = 'Hello world'
    state.newMessageText = newMessageText


    const newState = dialogPageReducer(state, addDialogMessage(DIALOG1_ID))


    expect(state !== newState).toBe(true)
    expect(state.messages !== newState.messages).toBe(true)
    expect(newState.messages[DIALOG1_ID].length).toBe(4)
    expect(newState.newMessageText).toBe('')
    expect(newState.messages[DIALOG2_ID].length).toBe(3)
})

test('dialog message should not be add', () => {

    const newMessageText = '   '
    state.newMessageText = newMessageText

    const newState = dialogPageReducer(state, addDialogMessage(DIALOG1_ID))

    expect(state === newState).toBe(true)
    expect(newState.messages[DIALOG1_ID].length).toBe(3)
})


test('dialog message should be change', () => {

    const newMessageText = 'Hello world'

    const newState = dialogPageReducer(state, changeNewDialogMessage(newMessageText))

    expect(state !== newState).toBe(true)
    expect(newState.newMessageText).toBe(newMessageText)
})

test('dialog message should not be change', () => {
    const newMessageText = '    '

    const newState = dialogPageReducer(state, changeNewDialogMessage(newMessageText))

    expect(state === newState).toBe(true)
    expect(newState.newMessageText).toBe('')
})
