import React from 'react'
import {Toolbar} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import Posts from './Posts/Posts';


const useStyles = makeStyles(theme => ({
    content:{
        flexGrow:1,
        padding:theme.spacing(3)
    }
}));


export default function Profile () {
    const classes = useStyles()
    return (
        <main className={classes.content}>
            <Toolbar/>
            <Posts/>
        </main>

    )
}