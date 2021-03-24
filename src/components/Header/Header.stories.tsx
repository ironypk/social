import React from 'react'
import Header from './Header';
import {Story} from '@storybook/react';


export default {
    title : 'Header/Header',
    component:Header
}


const Template:Story<any> = (args) => <Header {...args}/>


export const DefaultHeader  = Template.bind({})
DefaultHeader.args={

}

