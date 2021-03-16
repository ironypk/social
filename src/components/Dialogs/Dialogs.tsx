import React from 'react'
import {Grid, List, ListItemText, ListItem, Divider, makeStyles, Avatar} from '@material-ui/core';
import {NavLink} from 'react-router-dom';


const useStyle = makeStyles((theme) => ({
    dialogsItems: {
        width: 200
    },
    commentsItemContainer: {
        display: 'flex',
        alignItems: 'center'

    },
    commentsItem: {
        borderRadius: '5px 5px 5px 0px',
        position: 'relative',
        background: theme.palette.secondary.dark,
        opacity: '.5',
        color: '#fff',
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            width: 15,
            height: 15,
            left: -14,
            background: `radial-gradient(circle at 0 0,rgba(0,0,0,0) 15px, ${theme.palette.secondary.dark} 0)`
        }
    },
    divider: {
        margin: 0,
    },
    orange: {
        backgroundColor: 'orange',
        marginRight: 5
    }
}))


type DialogPropsType = {
    value: string
    id: number
}

type CommentPropsType = {
    value:string
}

function Dialog(props: DialogPropsType) {
    const href = `/dialogs/${props.id + 1}`
    const classes = useStyle()
    return (
        <Grid item className={classes.dialogsItems}>
            <ListItem button component={NavLink} to={href}>
                <ListItemText>
                    {props.value}
                </ListItemText>
            </ListItem>
        </Grid>
    )

}

function Comment(props:CommentPropsType) {
    const classes = useStyle()
    return (
        <Grid item className={classes.commentsItemContainer}>
            <Avatar className={classes.orange}>X</Avatar>
            <ListItem className={classes.commentsItem}>
                <ListItemText>
                    {props.value}
                </ListItemText>
            </ListItem>
        </Grid>
    )
}

function Dialogs() {
    const classes = useStyle()
    return (
        <Grid container spacing={2}>
            <Grid item>
                <Grid container direction='column' component={List}>
                    {['sveta', 'mike', 'john'].map((value, index) => <Dialog value={value} id={index}/>)}
                </Grid>
            </Grid>
            <hr className={classes.divider}/>
            <Grid item>
                <Grid container direction='column' component={List} spacing={2}>
                    {['Yo', 'hello how ate you', 'tratatta'].map(value => <Comment value={value}/>)}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Dialogs