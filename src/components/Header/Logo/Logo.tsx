import {Paper, Typography} from '@material-ui/core';
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {NavLink} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    link : {
        textDecoration:'none',
    },
    logo:{
        margin:theme.spacing(1),
        padding:theme.spacing(1),
        border:'1px solid #fff',
        backgroundColor:'transparent',
        color:theme.palette.primary.contrastText
    }

}));

export type LogoPropsType = {
    label?:string,
}

export const Logo:React.FC<LogoPropsType> = ({label = 'IN'}) => {
    const classes = useStyles()
    return (
        <NavLink to={'/'} className={classes.link}>
            <Paper variant='outlined' className={classes.logo}>
                <Typography>
                    {label}
                </Typography>
            </Paper>
        </NavLink>
    )
}