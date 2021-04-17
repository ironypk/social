import React from 'react'
import {Avatar, Box, Paper, Typography} from '@material-ui/core';
import {ProfileInfoType} from '../../../redux/reducers/profilePageReducer';

export type ProfileInfoPropsType = {
    profileInfo: ProfileInfoType
}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = ({profileInfo: {avatar, fullName, city, about}}) => {
    return (
        <Paper>
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