import React from 'react'
import {Avatar, Box, Paper, Typography} from '@material-ui/core';


const ProfileInfo: React.FC = () => {
    return (
        <Paper >
            <Box display='flex' alignItems='center' m={1} p={1}>
                <Avatar style={{marginRight: 10}}>К</Avatar>
                <Box>
                    <Typography>ФИО</Typography>
                    <Typography>Город</Typography>
                    <Typography>Обо мне</Typography>
                </Box>
            </Box>
        </Paper>
    )
}

export default ProfileInfo