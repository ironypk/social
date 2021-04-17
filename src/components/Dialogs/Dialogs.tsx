import React from 'react'
import {Grid, makeStyles} from '@material-ui/core';
import {DialogList} from './DialogList/DialogList';
import {Comments} from './Comments/Comments'
import {Form} from '../Form/Form';
import {Redirect, Route, Switch, useRouteMatch} from 'react-router-dom'
import {DialogsPropsType} from './DialogsContainer';


const useStyle = makeStyles((theme) => ({
    divider: {
        margin: 0,
    }
}))


export const Dialogs: React.FC<DialogsPropsType> =
    ({my_ID, dialogs, messages, newMessageText, title, changeNewDialogMessage, addDialogMessage}) => {
        const classes = useStyle()
        const match = useRouteMatch()
        return (
            <Grid container spacing={2}>
                <Grid item>
                    <DialogList dialogs={dialogs}/>
                </Grid>
                <hr className={classes.divider}/>
                <Switch>
                    {
                        dialogs.map(dialog => {
                            const addMessage = () => {
                                addDialogMessage(dialog.id)
                            }
                            const changeMessage = (value: string) => {
                                changeNewDialogMessage(value)
                            }
                            return <Route key={dialog.id} path={`${match.url}/${dialog.id}`} render={() => {
                                return (
                                    <Grid item xs={8}>
                                        <Comments messages={messages} dialogID={dialog.id} my_ID={my_ID}/>
                                        <Form newText={newMessageText} title={title} sendForm={addMessage}
                                              changeFormText={changeMessage}/>
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