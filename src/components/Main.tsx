import React from 'react'
import {Toolbar} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import Profile from "./Profile";


const useStyles = makeStyles(theme => ({
    content:{
        flexGrow:1,
        padding:theme.spacing(3)
    }
}));


export default function Main () {
    const classes = useStyles()
    return (
        <main className={classes.content}>
            <Toolbar/>
            <Profile/>
        </main>

    )
}