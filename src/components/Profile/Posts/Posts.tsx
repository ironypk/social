import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import {Box, Button, TextField} from '@material-ui/core'
import Post from './Post';


const useStyles = makeStyles(theme => ({
    form: {
        maxWidth: 400,
        display: 'flex',
        flexDirection: 'column',
        marginBottom:20
    },
    button: {
        maxWidth: 150,
        backgroundColor: theme.palette.secondary.dark,
        color: '#fff'
    },
    textField: {
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: theme.palette.secondary.dark,
            }
        },
        '& .MuiInputLabel-root':{
            '&.Mui-focused': {
                color:theme.palette.secondary.dark,
                borderColor: theme.palette.secondary.dark
            }
        },
            marginBottom: 5
    },
    buttonWrap: {
        display: 'flex',
        justifyContent: 'flex-end'
    }
}));

const likes:LikesType = {
    like:10,
    dislike:1
}

export type LikesType = {
    like:number
    dislike:number
}

export default function Posts() {
    const classes = useStyles()
    return (
        <div>
            <form className={classes.form}>
                <TextField
                    className={classes.textField}
                    id="outlined-multiline-static"
                    label="Введите пост"
                    multiline
                    rows={4}
                    variant="outlined"
                />
                <Box className={classes.buttonWrap}>
                    <Button variant="contained" className={classes.button}>Отправить</Button>
                </Box>
            </form>
            <Post message='Hello' likes={likes}/>
            <Post message='another message' likes={likes}/>
        </div>
    )
}