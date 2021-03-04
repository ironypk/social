import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import {Avatar, Badge, Card, CardContent, IconButton, Typography} from '@material-ui/core';
import {AccountCircle, ThumbDown, ThumbUpAlt} from '@material-ui/icons';
import {green, red} from '@material-ui/core/colors'
import {withStyles} from '@material-ui/styles';
import { LikesType } from './MyPosts';


const useStyles = makeStyles(theme => ({
    root:{
        display:'flex',
        alignItems:'center',
        maxWidth:300,
        padding:theme.spacing(),
        marginBottom:20
    },
    cardContent:{
        width:'100%',
        '&:last-child':{
            padding:16
        },
    },
    controls:{
       display:'flex',
       justifyContent:'flex-end'
    },
}));


const StyledBadge = withStyles(() => ({
    badge: {
        right: -5,
        top: 13,
        padding: '0 4px',
    },
}))(Badge);


type PostPropsType = {
    message:string
    likes:LikesType
}


export default function Post (props:PostPropsType) {
    const classes = useStyles()
    return(
        <Card className={classes.root}>
            <Avatar>
                <AccountCircle/>
            </Avatar>
            <CardContent classes={{root:classes.cardContent
            }}>
                <Typography>{props.message}</Typography>
                <div className={classes.controls}>
                    <IconButton>
                        <StyledBadge badgeContent={props.likes.like}>
                            <ThumbUpAlt style={{color:green[600]}}/>
                        </StyledBadge>
                    </IconButton>
                    <IconButton>
                        <StyledBadge badgeContent={props.likes.dislike}>
                            <ThumbDown style={{color:red[600]}}/>
                        </StyledBadge>
                    </IconButton>
                </div>
            </CardContent>
        </Card>
    )
}