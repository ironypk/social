import {Box, Button, TextField} from '@material-ui/core';
import React, {ChangeEvent, FormEvent, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {deepPurple, grey} from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    form: {
        maxWidth: 400,
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 20,
},
    root : {
        '& label':{
            textTransform: 'uppercase',
            fontSize: '1.5rem',
        },
        '& .MuiInputBase-root': {
            top: theme.spacing(2),
            border: `1px solid ${grey[500]}`,
            outline: `1px solid transparent`,
            padding: theme.spacing(1),
            marginBottom: theme.spacing(3),
            '&.Mui-focused': {
                border: `1px solid ${deepPurple[500]}`,
                outline: `1px solid ${deepPurple[500]}`
            }
        },

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


type TextFieldComponentPropsType = {
    value : string
    onChange: (message:string) => void
    autoFocus?:boolean
}

const TextFieldComponent:React.FC<TextFieldComponentPropsType> = ({value,onChange,...props}) => {
    const classes = useStyles()
    function onChangeHandler (e:ChangeEvent<HTMLInputElement>){
        onChange(e.currentTarget.value)
    }
    return (
        <TextField
            id="outlined-multiline-static"
            label="Введите пост"
            multiline
            rows={4}
            value={value}
            onChange={onChangeHandler}
            className={classes.root}
            InputLabelProps={{
                shrink: true,
            }}
            InputProps={{
                disableUnderline: true,
            }}

        />
    )
}

export type PostFormPropsType = {
    newPostText : string
    changeNewPostText : (message : string) => void
    addPost: () => void
}


export const PostForm:React.FC<PostFormPropsType> = ({newPostText, changeNewPostText, addPost}) => {
    const classes = useStyles()
    function onSubmitHandler (e:FormEvent<HTMLFormElement>){
        e.preventDefault()
        addPost()
    }
    return (
        <form className={classes.form} onSubmit={onSubmitHandler} >
            <TextFieldComponent value={newPostText} onChange={changeNewPostText} autoFocus={true}/>
            <Box className={classes.buttonWrap}>
                <Button type='submit' color='primary' variant="contained">Отправить</Button>
            </Box>
        </form>
    )
}