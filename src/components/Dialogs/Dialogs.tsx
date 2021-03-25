import React from 'react'
import {Grid, List, makeStyles} from '@material-ui/core';
import {DialogList} from './DialogList/DialogList';
import {Comments} from './Comments/Comments'
import {DialogsPageType} from '../../redux';


const useStyle = makeStyles((theme) => ({
    divider: {
        margin: 0,
    }
}))


export const  Dialogs:React.FC<DialogsPageType> = ({dialogs,messages}) => {
    const classes = useStyle()
    return (
        <Grid container spacing={2}>
            <Grid item>
                <DialogList dialogs={dialogs}/>
            </Grid>
            <hr className={classes.divider}/>
            <Grid item xs={8}>
                <Comments messages={messages}/>
            </Grid>
        </Grid>
    )
}