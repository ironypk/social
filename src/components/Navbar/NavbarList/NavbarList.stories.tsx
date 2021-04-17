import React from 'react';
import {NavbarList as NavbarListComponent, NavbarListPropsType,} from './NavbarList';
import {Story} from '@storybook/react';
import {BrowserRouter} from 'react-router-dom';

export default {
    title : 'Navbar/NavbarList',
    component:NavbarListComponent,
    decorators : [
        (Story:Story) => (
            <BrowserRouter>
                <Story/>
            </BrowserRouter>
        )
    ]
}

const Template:Story<NavbarListPropsType> = (args) => <NavbarListComponent {...args}/>

export const NavbarList = Template.bind({})
 NavbarList.args = {routes:[{title:'Route_1'},{title:'Route_2'}],
}