import React from 'react'
import {AppBar, Avatar, Box, Toolbar} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'


const useStyles = makeStyles(theme => ({
    appBar: {
        backgroundColor: theme.palette.secondary.dark,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        zIndex: theme.zIndex.drawer + 1,
    },
    avatar:{
        border:'1px solid #fff',
        backgroundColor:'transparent'
    }

}));


export default function Header() {
    const classes = useStyles()
    return (
        <AppBar className={classes.appBar} position="fixed">
            <Box m={1}>
                <Avatar className={classes.avatar} variant='rounded'>IN</Avatar>
            </Box>
            <Toolbar/>
        </AppBar>
    )
}