import React from 'react'
import {Navbar as NavbarComponent, NavbarPropsType} from './Navbar';
import {Story} from '@storybook/react';
import {BrowserRouter} from 'react-router-dom';
import * as NavbarListStories from './NavbarList/NavbarList.stories'
import * as FriendsStories from './Friends/Friends.stories'
import {v1} from 'uuid';

export default {
    title : 'Navbar/Navbar',
    component : NavbarComponent,
    decorators : [
        (Story:Story) => (
            <BrowserRouter>
                <Story/>
            </BrowserRouter>
        )
    ]
}

const Template:Story<NavbarPropsType> = (args) => <NavbarComponent {...args}/>

export const Navbar  = Template.bind({})
Navbar.args = {
    ...NavbarListStories.NavbarList.args,
    ...FriendsStories.Friends.args
}
