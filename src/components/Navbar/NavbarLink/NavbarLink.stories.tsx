import React from 'react';
import {NavbarLink, NavbarLinkPropsType} from './NavbarLink';
import {Story} from '@storybook/react';
import {BrowserRouter} from 'react-router-dom';

export default {
    title : 'Navbar/NavbarLink',
    component:NavbarLink
}

const Template:Story<NavbarLinkPropsType> = (args) => (
    <BrowserRouter>
        <NavbarLink {...args}/>
    </BrowserRouter>
)

export const DefaultNavbarLink = Template.bind({})
DefaultNavbarLink.args = {
    title:'Тест'
}