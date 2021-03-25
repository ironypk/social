import React from 'react';
import {CommentPropsType, Comments as CommentsComponent} from './Comments'
import {Story} from '@storybook/react';

export default {
    title: 'Dialogs/Comments',
    component: CommentsComponent
}

const Template: Story<CommentPropsType> = (args) => <CommentsComponent {...args}/>

export const Comments = Template.bind({})
Comments.args = {
    messages: [
        {
            owner: 'you', message: 'Привет,как дела?', avatar: 'Я'
        },
        {
            owner: 'viktor', message: 'Здаров,потихоньку', avatar: 'В'
        },
        {
            owner: 'viktor', message: 'А ты как?', avatar: 'В'
        },
        {
            owner: 'you', message: 'Привет,как дела?', avatar: 'Я'
        },{
            owner: 'you', message: 'Привет,как дела?', avatar: 'Я'
        },
    ]
}

