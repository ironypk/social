import React from 'react'
import {AppBar, Toolbar} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {Logo} from './Logo/Logo';


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
    return (
        <AppBar className={classes.appBar} position="fixed">
            <Logo/>
            <Toolbar/>
        </AppBar>
    )
}