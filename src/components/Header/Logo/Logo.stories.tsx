import React from 'react';
import {Logo as LogoComponent, LogoPropsType} from './Logo';
import {BrowserRouter} from 'react-router-dom';
import {Story} from '@storybook/react';

export default {
    title : 'Header/Logo',
    component : LogoComponent,
    decorators : [
        (Story:Story) => (
            <BrowserRouter>
                <div style={{backgroundColor:'#999', padding:'5px'}}>
                    <Story/>
                </div>
            </BrowserRouter>
        )
    ]
}


const Template:Story<LogoPropsType> = (args) => <LogoComponent {...args}/>
export const Default = Template.bind({})
Default.args = {}
export const Label = Template.bind({})
Label.args = {
    label:'Logo'
}