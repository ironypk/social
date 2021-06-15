import React, {useEffect} from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import {Redirect, Route, Switch} from 'react-router-dom'
import {CircularProgress, Toolbar} from '@material-ui/core';
import {Header} from './components/Header/Header';
import {NavbarContainer} from './components/Navbar/NavbarContainer';
import {Users} from './components/Users/Users';
import {Profile} from './components/Profile/Profile';
import {Login} from './components/Login/Login';
import {Dialogs} from './components/Dialogs/Dialogs';
import {ErrorSnackbar} from './components/UI/ErrorSnackbar/ErrorSnackbar';
import {useDispatch, useSelector} from 'react-redux';
import {initializingTC} from './redux/reducers/appReducer';
import {AppStateType} from './redux';


const useStyles = makeStyles<Theme>(theme => ({
    root: {
        display: 'flex'
    },
    content: {
        width:'100%',
        padding: theme.spacing(3)
    },
    circularWrapper : {
        width:'100%',
        height:'100vh',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
}));


const App = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const initializing = useSelector<AppStateType,boolean>(state => state.app.initializing)
    useEffect(()=>{
        dispatch(initializingTC())
    },[])
    if (!initializing) return <div className={classes.circularWrapper}><CircularProgress size={100}/></div>
    return (
        <div className={classes.root}>
            <Header/>
            <NavbarContainer/>
                <main className={classes.content}>
                    <Toolbar/>
                    <Switch>
                        <Route path='/profile/:userID?' render={() => <Profile/>}/>
                        <Route path='/dialogs' render={() => <Dialogs/>}/>
                        <Route path='/users' render={() => <Users/>}/>
                        <Route path='/login' render={()=> <Login/>}/>
                        <Route path={'/'} exact render={() => <Redirect to='/profile'/>}/>
                    </Switch>
                </main>
            <ErrorSnackbar/>
        </div>
    )
}

export default App;
