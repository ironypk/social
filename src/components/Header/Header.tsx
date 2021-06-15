import React from 'react'
import {AppBar, Button, Toolbar} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {Logo} from './Logo/Logo';
import {useDispatch, useSelector} from 'react-redux';
import {AuthStateType, logoutTC} from '../../redux/reducers/authReducer';
import {AppStateType} from '../../redux';
import {useHistory} from 'react-router-dom'


const useStyles = makeStyles(theme => ({
    appBar: {
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        zIndex: theme.zIndex.drawer + 1,
    }
}));




export const Header = () => {
    const classes = useStyles()
    const dispatch = useDispatch<any>()
    const {isLogin} = useSelector((state:AppStateType):AuthStateType => state.auth)
    const history = useHistory()


    const login = ()=> {
        history.push('/login')
    }
    const logout = ()=> {
        const response = dispatch(logoutTC())
        response.then(()=>{
            history.push('/login')
        })
    }

    return (
        <AppBar className={classes.appBar} position="fixed">
            <Logo/>
            <Toolbar>
                {isLogin
                    ? <Button  variant={'outlined'} size={'small'} onClick={logout}>Logout</Button>
                    : <Button  variant={'outlined'} size={'small'} onClick={login}>Login</Button>}
            </Toolbar>
        </AppBar>
    )
}