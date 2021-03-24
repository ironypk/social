import React from 'react'
import {Avatar, Box, Paper, Typography} from '@material-ui/core';
import {ProfileInfoType} from '../../../redux';

const ProfileInfo: React.FC<ProfileInfoType> = ({fullName,avatar,about,city}) => {
    return (
        <Paper >
            <Box display='flex' alignItems='center' m={1} p={1}>
                <Avatar style={{marginRight: 10}}>{avatar}</Avatar>
                <Box>
                    <Typography>{fullName}</Typography>
                    <Typography>{city}</Typography>
                    <Typography>{about}</Typography>
                </Box>
            </Box>
        </Paper>
    )
}

export default ProfileInfo