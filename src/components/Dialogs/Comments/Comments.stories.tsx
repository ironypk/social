import React from 'react';
import {Comments as CommentsComponent, CommentsPropsType} from './Comments'
import {Story} from '@storybook/react';
import {DIALOG1_ID, DIALOG2_ID, MY_ID} from '../../../redux/types';

export default {
    title: 'Dialogs/Comments',
    component: CommentsComponent
}

const Template: Story<CommentsPropsType> = (args) => <CommentsComponent {...args}/>

export const Comments = Template.bind({})
Comments.args = {
    messages: {
        [DIALOG1_ID] : [
            {
                id:MY_ID, message: 'Привет,как дела?', avatar: 'Я'
            },
            {
                id: DIALOG1_ID, message: 'Здаров,потихоньку', avatar: 'В'
            },
            {
                id: DIALOG1_ID,message: 'А ты как?', avatar: 'В'
            }
        ],
        [DIALOG2_ID] : [
            {
                id:MY_ID, message: 'Кукусики', avatar: 'Я'
            },
            {
                id: DIALOG2_ID, message: 'Привет,мужик', avatar: 'S'
            },
            {
                id: DIALOG2_ID,message: 'Ты самый лучший', avatar: 'S'
            }
        ]
    },
    dialogID : DIALOG1_ID
}

