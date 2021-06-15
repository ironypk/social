import React from 'react';
import store from './redux';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {StylesProvider} from '@material-ui/styles';
import {CssBaseline} from '@material-ui/core';
import App from './App';
import {Provider} from 'react-redux';



ReactDOM.render(
/*    <React.StrictMode>*/
        <BrowserRouter>
            <Provider store={store}>
                <StylesProvider injectFirst>
                    <CssBaseline/>
                    <App/>
                </StylesProvider>
            </Provider>
        </BrowserRouter>
/*    </React.StrictMode>*/,
    document.getElementById('root')
)

