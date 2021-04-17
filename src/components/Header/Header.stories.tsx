import React from 'react'
import {Header as HeaderComponent} from './Header';
import {Story} from '@storybook/react';
import {BrowserRouter} from 'react-router-dom';


export default {
    title : 'Header/Header',
    component:HeaderComponent,
    argTypes:{
        backgroundColor:{control:'color'}
    },
    decorators : [
        (Story:Story) => (
            <BrowserRouter>
                <Story/>
            </BrowserRouter>
        )
    ]

}


const Template:Story = (args) => <HeaderComponent {...args}/>


export const Header  = Template.bind({})
Header.args={}

