import React from 'react';
import {Dialogs as DialogsComponent} from './Dialogs';
import {BrowserRouter} from 'react-router-dom';
import {Story} from '@storybook/react';
import {DialogsPageType} from '../../redux';
import * as CommentsStories from './Comments/Comments.stories'
import * as DialogListStories from './DialogList/DialogList.stories'

export default {
    title:'Dialogs/Dialogs',
    component:DialogsComponent,
    decorators : [
        (Story:Story) => (
            <BrowserRouter>
                <Story/>
            </BrowserRouter>
        )
    ]
}

const Template:Story<DialogsPageType> = (args) => <DialogsComponent {...args}/>
export const Dialogs= Template.bind({})
Dialogs.args = {
    ...CommentsStories.Comments.args,
    ...DialogListStories.DialogList.args
}

