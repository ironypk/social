import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {renderTextField} from '../../UI/FormFields';
import {Button, createStyles, makeStyles, Theme} from '@material-ui/core';
import {requiredField} from '../../../validators/validators';

export interface IDialogForm {
    message: string
}

const width = 200
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: width,
            },
        },
        buttonWrap: {
            display: 'flex',
            justifyContent: 'flex-end',
            width: width,
            margin: theme.spacing(1),

        }
    }),
);

const DialogForm: React.FC<InjectedFormProps<IDialogForm>> = (props) => {
    const classes = useStyles();
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name='message' rows={4} multiline={true} label='Введите сообщение...' component={renderTextField} validate={[requiredField]}/>
            <div className={classes.buttonWrap}>
                <Button type='submit' color='primary' variant="contained">Отправить</Button>
            </div>
        </form>
    )
}
export const DialogReduxForm = reduxForm<IDialogForm>({
    form: 'dialog'
})(DialogForm)