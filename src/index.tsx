import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {CssBaseline} from '@material-ui/core'
import {StylesProvider} from '@material-ui/styles'
import {BrowserRouter} from 'react-router-dom';
import {state} from './redux';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <StylesProvider injectFirst>
                <CssBaseline/>
                <App {...state}></App>
            </StylesProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();