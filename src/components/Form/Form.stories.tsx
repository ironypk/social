import React from 'react';
import {Form as PostFormComponent, PostFormPropsType} from './Form';
import {Story} from '@storybook/react';

export default {
    title : 'Form',
    component : PostFormComponent
}

const Template:Story<PostFormPropsType> = (args) => <PostFormComponent {...args}/>
export const PostForm = Template.bind({})
PostForm.args={
    title:'введите новый пост',
    newText : ''
}
export  const DialogForm = Template.bind({})
DialogForm.args={
    title:'введите новое сообщение',
    newText:''
}