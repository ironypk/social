import {Grid, List, ListItem, ListItemText, makeStyles} from '@material-ui/core';
import React from 'react';
import {NavLink, useRouteMatch} from 'react-router-dom';
import {DialogType} from '../../../redux/reducers/dialogsPageReducer';

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

export const Dialog: React.FC<DialogType> = (props) => {
    const match = useRouteMatch();
    const classes = useStyle()
    return (
        <Grid item className={classes.dialogsItems}>
            <ListItem button component={NavLink} to={`${match.url}/${props.id}`} activeClassName={'Mui-selected'} className={classes.item}>
                <ListItemText className={classes.text}>
                    {props.name}
                </ListItemText>
            </ListItem>
        </Grid>
    )

}

export type DialogListPropsType = {
    dialogs : DialogType[]
}

export const DialogList:React.FC<DialogListPropsType> = ({dialogs,...restProps}) => {
    return (
        <Grid container direction='column' component={List}>
            {dialogs.map(dialog => <Dialog key={dialog.id} id={dialog.id} name={dialog.name}/>)}
        </Grid>
    )
}