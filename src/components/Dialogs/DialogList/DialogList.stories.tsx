import React from 'react';
import {DialogList as DialogListComponent, DialogListPropsType} from './DialogList';
import {Story} from '@storybook/react';
import {v1} from 'uuid';
import {BrowserRouter} from 'react-router-dom';

export default {
    title : 'Dialogs/DialogList',
    component : DialogListComponent,
    decorators : [
        (Story:Story) => (
            <BrowserRouter>
                <Story/>
            </BrowserRouter>
        )
    ]
}

const Template:Story<DialogListPropsType> = (args) => <DialogListComponent {...args}/>
export const DialogList = Template.bind({})
DialogList.args = {
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
}