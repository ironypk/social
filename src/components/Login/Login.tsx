import React from 'react'
import {Button, createStyles, makeStyles, Theme, Typography} from '@material-ui/core';
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {useDispatch, useSelector} from 'react-redux';
import {AuthStateType, loginTC} from '../../redux/reducers/authReducer';
import {AppStateType} from '../../redux';
import {Redirect} from 'react-router-dom'
import {renderCheckbox, renderTextField} from '../UI/FormFields';
import {email, requiredField} from '../../validators/validators';

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

export interface ILogin {
    email: string
    password: string
    rememberMe: boolean
}

export interface IProps {
    onSubmit: (data: ILogin) => Promise<{ resultCode: number, messages: string[], data: {} }>
}

type SomeProps = {
    name: string
}

const LoginForm: React.FC<InjectedFormProps<ILogin> & SomeProps> = ({submitting, ...props}) => {
    const classes = useStyles();
    return (
        <form className={classes.root} onSubmit={props.handleSubmit}>
            <div><Field type='email' name='email' label='email' component={renderTextField}
                        validate={[requiredField, email]}/></div>
            <div><Field type='password' name='password' label='password' component={renderTextField}
                        validate={[requiredField]}/></div>
            <div><Field name='rememberMe' component={renderCheckbox}/> remember me</div>
            <div className={classes.buttonWrap}>
                <Button type={'submit'} disabled={submitting} variant='contained' color='primary'>Login</Button>
            </div>
        </form>
    )
}


const LoginReduxForm = reduxForm<ILogin, any>({
    form: 'userForm',
})(LoginForm);

export const Login = () => {
    const dispatch = useDispatch()
    const {isLogin} = useSelector((state: AppStateType): AuthStateType => state.auth)

    const onSubmitHandler = (data: ILogin) => {
        return dispatch(loginTC(data))
    }

    if (isLogin) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <>
            <Typography variant={'h3'}>Login</Typography>
            <LoginReduxForm onSubmit={onSubmitHandler} SomeProps={'123123'}/>
        </>
    )
}
