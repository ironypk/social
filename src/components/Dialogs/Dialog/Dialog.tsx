import {Grid, ListItem, ListItemText, makeStyles} from '@material-ui/core';
import React from 'react';
import {NavLink} from 'react-router-dom';
import {DialogType} from '../../../redux';

export const useStyle = makeStyles((theme) => ({
    dialogsItems: {
        width: '100%',
    },
    text:{
        textAlign:'center'
    },
    item:{
        padding:0
    }
}))

const Dialog: React.FC<DialogType> = (props) => {
    const href = `/dialogs/${props.id}`
    const classes = useStyle()
    return (
        <Grid item className={classes.dialogsItems}>
            <ListItem button component={NavLink} to={href} className={classes.item}>
                <ListItemText className={classes.text}>
                    {props.name}
                </ListItemText>
            </ListItem>
        </Grid>
    )

}

export default Dialog