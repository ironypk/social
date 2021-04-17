import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Redirect, Route, Switch} from 'react-router-dom'
import {Toolbar} from '@material-ui/core';
import {Header} from './components/Header/Header';
import {ProfileContainer} from './components/Profile/ProfileContainer';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {NavbarContainer} from './components/Navbar/NavbarContainer';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    }
}));


const App = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Header/>
            <NavbarContainer/>
            <main className={classes.content}>
                <Toolbar/>
                <Switch>
                    <Route path='/profile' exact render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path={'/'} exact render={() => <Redirect to='/profile'/>}/>
                </Switch>
            </main>
        </div>
    )
}

export default App;
