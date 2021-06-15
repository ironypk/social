import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {renderTextField} from '../../UI/FormFields';
import {Button, createStyles, makeStyles, Theme} from '@material-ui/core';
import {minLengthVC} from '../../../validators/validators';

export interface IProfileForm {
    message: string
}

const width = 200;

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
const minLength = minLengthVC(3)
const ProfileForm: React.FC<InjectedFormProps<IProfileForm>> = (props) => {
    const classes = useStyles();
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name='message' rows={4} multiline={true} label='Введите сообщение...' component={renderTextField} validate={[minLength]}/>
            <div className={classes.buttonWrap}>
                <Button type='submit' color='primary' variant="contained">Отправить</Button>
            </div>
        </form>
    )
}
export const ProfileReduxForm = reduxForm<IProfileForm>({
    form: 'profile'
})(ProfileForm)