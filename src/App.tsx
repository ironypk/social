import React from 'react';
import {Profile} from './components/Profile/Profile';
import {makeStyles} from '@material-ui/core/styles';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom'
import {Toolbar} from '@material-ui/core';
import {Navbar} from './components/Navbar/Navbar';
import {DialogsPageType, ProfilePageType, SideBarType, StateType} from './redux';
import {Header} from './components/Header/Header';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    }
}));

export type AppPropsType = {
    state : StateType
    changeNewPostText : (message : string) => void
    addPost:() => void
}


const App: React.FC<AppPropsType> = ({state,changeNewPostText, addPost}) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Header/>
            <Navbar routes={state.sideBar.routes} friends={state.sideBar.friends}/>
            <main className={classes.content}>
                <Toolbar/>
                <Route path='/profile' exact render={() => <Profile {...state.profilePage} changeNewPostText={changeNewPostText} addPost={addPost}/>}/>
                <Route path='/dialogs' render={() => <Dialogs dialogs={state.dialogsPage.dialogs}
                                                              messages={state.dialogsPage.messages}/>}/>
                <Route path='/' exact render={() => <Profile {...state.profilePage} changeNewPostText={changeNewPostText} addPost={addPost}/>}/>
            </main>
        </div>
    )
}

export default App;
