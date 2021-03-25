import React from 'react';
import {Avatar, Box, Grid, List, ListItem, ListItemText, makeStyles, Typography,} from '@material-ui/core';
import {MessageType} from '../../../redux';
import clsx from 'clsx'


const useStyle = makeStyles((theme) => ({
    commentsItemContainer: {
        display: 'flex',
        alignItems: 'center',
        width:'100%',
    },
    commentsItem: {
        width:200,
        display:'flex',
        alignItems:'flex-end',
        borderRadius: '5px 5px 5px 0px',
        margin:'0 0 0 5px',
        position: 'relative',
        background: theme.palette.primary.main,
        opacity: '.5',
        color: '#fff',
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            width: 15,
            height: 15,
            left: -14,
            background: `radial-gradient(circle at 0 0,rgba(0,0,0,0) 15px, ${theme.palette.primary.main} 0)`
        }
    },
    you:{
        flexDirection: 'row-reverse',
        '& $commentsItem':{
            borderRadius: '5px 5px 0px 5px',
            margin: '0 5px 0 0',
            '&::after':{
             left:'inherit',
             right:-14,
                background: `radial-gradient(circle at top right ,rgba(0,0,0,0) 15px, ${theme.palette.primary.main} 0)`
            }
        }
    },
    to:{},
    orange: {
        backgroundColor: 'orange',
    }
}))

export const Comment:React.FC<MessageType> =(props) => {
    const classes = useStyle()
    return (
        <Grid item xs={12} className={clsx(classes.commentsItemContainer, {[classes.you]:props.owner === 'you'})}>
            <Avatar className={classes.orange}>{props.avatar}</Avatar>
            <ListItem className={classes.commentsItem}>
                <ListItemText>
                    {props.message}
                </ListItemText>
            </ListItem>
        </Grid>
    )
}

export type CommentPropsType = {
    messages : MessageType[]
}

export const Comments:React.FC<CommentPropsType> = ({messages}) => {
    return (
        <Grid container direction='column' component={List} spacing={2}>
            {messages.map(message => <Comment key={message.message+Math.random()} {...message}/>)}
        </Grid>
    )
}
