import React from 'react'
import {PostType} from '../../../redux/reducers/profilePageReducer';
import {makeStyles} from '@material-ui/core/styles';
import {withStyles} from '@material-ui/styles';
import {Avatar, Badge, Card, CardContent, IconButton, Typography} from '@material-ui/core';
import {AccountCircle, ThumbUpAlt} from '@material-ui/icons';
import {green} from '@material-ui/core/colors';

export type ProfilePostType = {
    posts: Array<PostType>
}

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        maxWidth: 300,
        padding: theme.spacing(),
        marginBottom: 20
    },
    cardContent: {
        width: '100%',
        '&:last-child': {
            padding: 16
        },
    },
    controls: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
}));


const StyledBadge = withStyles(() => ({
    badge: {
        right: -5,
        top: 13,
        padding: '0 4px',
    },
}))(Badge);

export const Posts: React.FC<ProfilePostType> = ({posts}) => {
    const classes = useStyles()
    return (
        <div>
            {posts.map(post =>
                <Card key={post.id} className={classes.root}>
                    <Avatar>
                        <AccountCircle/>
                    </Avatar>
                    <CardContent classes={{
                        root: classes.cardContent
                    }}>
                        <Typography>{post.message}</Typography>
                        <div className={classes.controls}>
                            <IconButton>
                                <StyledBadge badgeContent={post.likes ? post.likes : '0'}>
                                    <ThumbUpAlt style={{color: green[600]}}/>
                                </StyledBadge>
                            </IconButton>
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}