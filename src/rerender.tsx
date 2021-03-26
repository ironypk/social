import ReactDOM from 'react-dom';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {StylesProvider} from '@material-ui/styles';
import {CssBaseline} from '@material-ui/core';
import App from './App';
import {changeNewPostText, StateType, addPost} from './redux';

export const rerender = (state : StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <StylesProvider injectFirst>
                    <CssBaseline/>
                    <App state={state} changeNewPostText={changeNewPostText} addPost={addPost}></App>
                </StylesProvider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}