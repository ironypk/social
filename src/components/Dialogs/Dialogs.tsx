import React from 'react'
import {Grid, List, makeStyles} from '@material-ui/core';
import Dialog from './Dialog/Dialog';
import Comment from './Comment/Comment'
import {DialogsPageType} from '../../redux';


const useStyle = makeStyles((theme) => ({
    divider: {
        margin: 0,
    }
}))


const  Dialogs:React.FC<DialogsPageType> = (props) => {
    const classes = useStyle()
    return (
        <Grid container spacing={2}>
            <Grid item>
                <Grid container direction='column' component={List}>
                    {props.dialogs.map(dialog => <Dialog key={dialog.id} id={dialog.id} name={dialog.name}/>)}
                </Grid>
            </Grid>
            <hr className={classes.divider}/>
            <Grid item xs={8}>
                <Grid container direction='column' component={List} spacing={2}>
                    {props.messages.map(message => <Comment key={message.message+Math.random()} {...message}/>)}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Dialogs