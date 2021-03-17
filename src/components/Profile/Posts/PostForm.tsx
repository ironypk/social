import {Box, Button, TextField} from '@material-ui/core';
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {deepPurple, grey} from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    form: {
        maxWidth: 400,
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 20
    },
    button: {
        maxWidth: 150,
        backgroundColor: theme.palette.secondary.dark,
        color: '#fff'
    },
    label: {
        textTransform: 'uppercase',
        fontSize: '1.5rem',
    },
    input: {
        top: theme.spacing(2),
        border: `1px solid ${grey[500]}`,
        outline: `1px solid transparent`,
        padding: theme.spacing(1),
        marginBottom: theme.spacing(3),
        '&$focused': {
            border: `1px solid ${deepPurple[500]}`,
            outline: `1px solid ${deepPurple[500]}`
        }

    },
    focused: {},
    buttonWrap: {
        display: 'flex',
        justifyContent: 'flex-end'
    }
}));

const TextFieldComponent = () => {
    const classes = useStyles()
    return (
        <TextField
            id="outlined-multiline-static"
            label="Введите пост"
            multiline
            rows={4}
            InputLabelProps={{
                shrink: true,
                classes: {
                    root: classes.label
                }
            }}
            InputProps={{
                classes: {
                    root: classes.input,
                    focused: classes.focused
                },
                disableUnderline: true
            }}
        />
    )
}

const PostForm = () => {
    const classes = useStyles()
    return (
        <form className={classes.form}>
            <TextFieldComponent/>
            <Box className={classes.buttonWrap}>
                <Button variant="contained" className={classes.button}>Отправить</Button>
            </Box>
        </form>
    )
}


export default PostForm