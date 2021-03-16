import React from 'react'
import {Avatar, Box, Typography} from '@material-ui/core';



const ProfileInfo : React.FC = () => {
    return <Box display='flex' alignItems='center' m={1}>
        <Avatar style={{marginRight:10}}>К</Avatar>
        <Typography>Description</Typography>
    </Box>
}

export  default  ProfileInfo