import {Box, Button, TextField} from '@material-ui/core';
import React, {ChangeEvent, FormEvent} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {deepPurple, grey} from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    form: {
        maxWidth: 400,
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 20,
    },
    root: {
        '& label': {
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
    value: string
    changeFormText: (value: string) => void
    autoFocus?: boolean
    title: string
}

const TextFieldComponent: React.FC<TextFieldComponentPropsType> = ({title, value, changeFormText, ...props}) => {
    const classes = useStyles()

    function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
        changeFormText(e.currentTarget.value)
    }

    return (
        <TextField
            id="outlined-multiline-static"
            label={title}
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
    newText: string
    title: string
    changeFormText: (value: string) => void
    sendForm: () => void
}


export const Form: React.FC<PostFormPropsType> = ({title, newText, sendForm, changeFormText}) => {
    const classes = useStyles()

    function onSubmitHandler(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        sendForm()
    }

    return (
        <form className={classes.form} onSubmit={onSubmitHandler}>
            <TextFieldComponent title={title} value={newText} changeFormText={changeFormText} autoFocus={true}/>
            <Box className={classes.buttonWrap}>
                <Button type='submit' color='primary' variant="contained">Отправить</Button>
            </Box>
        </form>
    )
}