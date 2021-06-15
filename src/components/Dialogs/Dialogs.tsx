import React from 'react'
import {CircularProgress, Grid, makeStyles} from '@material-ui/core';
import {DialogList} from './DialogList/DialogList';
import {Comments} from './Comments/Comments'
import {Redirect, Route, Switch, useRouteMatch} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../redux';
import {addDialogMessage, DialogsPageType} from '../../redux/reducers/dialogsPageReducer';
import {DialogReduxForm, IDialogForm} from './DialogForm/DialogForm';
import {reset} from 'redux-form';
import {WithAuthRedirect} from '../../hoc/withAuthRedirect';


const useStyle = makeStyles(() => ({
    divider: {
        margin: 0,
    }
}))

const DialogsContainer: React.FC =
    () => {
        const classes = useStyle()
        const match = useRouteMatch()
        const dispatch = useDispatch()
        const {my_ID, dialogs, messages} = useSelector((state: AppStateType): DialogsPageType => state.dialogsPage)
        const isLoading = useSelector((state: AppStateType): boolean => state.app.isLoading)
        if (isLoading) return <CircularProgress/>
        return (
            <Grid container spacing={2}>
                <Grid item>
                    <DialogList dialogs={dialogs}/>
                </Grid>
                <hr className={classes.divider}/>
                <Switch>
                    {
                        dialogs.map(dialog => {
                            const onSubmitHandler = (data: IDialogForm) => {
                                dispatch(addDialogMessage({dialogID: dialog.id, messageValue: data.message}))
                                dispatch(reset('dialog'))
                            }
                            return <Route key={dialog.id} path={`${match.url}/${dialog.id}`} render={() => {
                                return (
                                    <Grid item xs={8}>
                                        <Comments messages={messages} dialogID={dialog.id} my_ID={my_ID}/>
                                        <DialogReduxForm onSubmit={onSubmitHandler}/>
                                    </Grid>
                                )
                            }
                            }/>
                        })
                    }
                    <Route render={() => <Redirect to={'/dialogs'}/>}/>
                </Switch>
            </Grid>
        )
    }


export const Dialogs = () => {
    return (
        <WithAuthRedirect>
            <DialogsContainer/>
        </WithAuthRedirect>
    )
}


