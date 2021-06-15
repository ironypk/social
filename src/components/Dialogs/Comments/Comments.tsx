import React from 'react';
import {Avatar, Grid, List, ListItem, ListItemText, makeStyles,} from '@material-ui/core';
import clsx from 'clsx'
import {MessagesType, MessageType} from '../../../redux/reducers/dialogsPageReducer';


const useStyle = makeStyles((theme) => ({
    commentsItemContainer: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
    commentsItem: {
        width: 200,
        display: 'flex',
        alignItems: 'flex-end',
        borderRadius: '5px 5px 5px 0px',
        margin: '0 0 0 5px',
        position: 'relative',
        background: theme.palette.primary.main,
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
    you: {
        flexDirection: 'row-reverse',
        '& $commentsItem': {
            borderRadius: '5px 5px 0px 5px',
            margin: '0 5px 0 0',
            '&::after': {
                left: 'inherit',
                right: -14,
                background: `radial-gradient(circle at top right ,rgba(0,0,0,0) 15px, ${theme.palette.primary.main} 0)`
            }
        }
    },
    to: {},
    orange: {
        backgroundColor: 'orange',
    }
}))

type OwnCommentPropsType = {
    dialogID: string
    my_ID:string
}

export type CommentPropsType = MessageType & OwnCommentPropsType

export const Comment: React.FC<CommentPropsType> = (props) => {
    const classes = useStyle()
    return (
        <Grid item xs={12}
              className={clsx(classes.commentsItemContainer, {[classes.you]: props.id === props.my_ID})}>
            <Avatar className={classes.orange}>{props.avatar}</Avatar>
            <ListItem className={classes.commentsItem}>
                <ListItemText>
                    {props.message}
                </ListItemText>
            </ListItem>
        </Grid>
    )
}

export type CommentsPropsType = {
    messages: MessagesType
    my_ID:string
    dialogID: string
}

export const Comments: React.FC<CommentsPropsType> = ({my_ID,messages, dialogID, ...restProps}) => {
    return (
        <Grid container direction='column' component={List} spacing={2}>
            {messages[dialogID].map(message => <Comment my_ID={my_ID} key={message.message + Math.random()} message={message.message}
                                                        id={message.id} avatar={message.avatar} dialogID={dialogID}/>)}
        </Grid>
    )
}
