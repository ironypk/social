import React from 'react'
import {Avatar, Box, Grid} from '@material-ui/core';
import {FriendType} from '../../../redux';
import {makeStyles} from '@material-ui/core/styles';

export type FriendsPropsType = {
    friends? : Array<FriendType>
}

const useStyles = makeStyles(theme => ({
    gridContainer:{
        padding:'5px 0 5px 0',
    }
}));

const Friends:React.FC<FriendsPropsType> = ({friends}) => {
    const classes = useStyles()
    return <Grid container spacing={1} direction='row' className={classes.gridContainer}>
        {friends && friends.map(friend => {
            return (
                <Grid item xs={4}>
                    <Box display='flex' justifyContent='center'>
                        <Avatar src={friend.image}/>
                    </Box>
                </Grid>
            )
        })}
    </Grid>
}

export default Friends