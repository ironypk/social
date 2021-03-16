import React from 'react';
import Profile from './components/Profile/Profile';
import {makeStyles} from '@material-ui/core/styles';
import Dialogs from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom'
import {Toolbar} from '@material-ui/core';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {StateType} from './index';


const useStyles = makeStyles(theme => ({
    root:{
        display:'flex'
    },
    content:{
        flexGrow:1,
        padding:theme.spacing(3)
    }
}));


const App:React.FC<StateType> = (props) => {
    const classes = useStyles()
return (
    <div className={classes.root}>
        <Header/>
        <Navbar/>
        <main className={classes.content}>
            <Toolbar/>
            <Route path='/profile' exact render={() => <Profile posts={props.profilePage.posts}/>}/>
            <Route path='/dialogs' component={Dialogs}/>
            <Route path='/' exact render={() => <Profile posts={props.profilePage.posts}/>}/>
        </main>
    </div>
)
}

export default App;
