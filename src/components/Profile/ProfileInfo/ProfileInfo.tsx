import React from 'react'
import {Avatar, Box, Paper, Typography} from '@material-ui/core';
import {ProfileInfoType} from '../../../redux/reducers/profilePageReducer';
import {Status} from './Status/Status';

export type ProfileInfoPropsType = {
    profileInfo: ProfileInfoType
}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = React.memo((props) => {
    return (
        <Paper>
            <Box display='flex' flexDirection='column' m={1} p={1}>
                {/*<Status/>*/}
                <Avatar style={{marginRight: 10}}
                        src={props.profileInfo.photos.large !== null ? props.profileInfo.photos.large : ''}/>
                <Box>
                    <Typography>{props.profileInfo.fullName}</Typography>
                </Box>
            </Box>
        </Paper>
    )
})

