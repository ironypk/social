import React from 'react'
import Navbar, {NavbarPropsType} from './Navbar';
import {Story} from '@storybook/react';
import {BrowserRouter} from 'react-router-dom';
import {v1} from 'uuid';

export default {
    title : 'Navbar/Navbar',
    component : Navbar
}

const Template:Story<NavbarPropsType> = (args) => (
    <BrowserRouter>
        <Navbar {...args}/>
    </BrowserRouter>
)
export const DefaultNavbar  = Template.bind({})
DefaultNavbar.args = {
     routes:[{title:'Route_1'},{title:'Route_2'}],
}

export const NavbarWithFriends  = Template.bind({})
NavbarWithFriends.args = {
    routes:[{title:'Route_1'},{title:'Route_2'}],
    friends: [
        {
            id: v1(),
            name: 'Витя',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-rkY4tPNj7RorBnXjj1HNu4TsPcq5CdkPQ&usqp=CAU'
        },
        {
            id: v1(),
            name: 'Маша',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-rkY4tPNj7RorBnXjj1HNu4TsPcq5CdkPQ&usqp=CAU'
        },
    ]
}
