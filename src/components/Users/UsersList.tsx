import React from 'react'
import {Avatar, Button, Grid, makeStyles, Paper, Typography} from '@material-ui/core';
import {followTC, unFollowTC, UserType} from '../../redux/reducers/usersPageReducer';
import {NavLink} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {Dispatch} from 'redux';

const useStyle = makeStyles((theme) => ({
    photoWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    photo: {
        width: '60',
        height: '60',
        marginBottom: theme.spacing()
    },
    button: {
        width: '100%'
    },
    info: {
        height: '100%',
        padding: theme.spacing(),
        display: 'flex',
        justifyContent: 'space-between'
    },
}))

export type UsersListType = {
    users: Array<UserType>
    followingProgress: number[]
}

export const UsersList: React.FC<UsersListType> = React.memo((({users, followingProgress}) => {
    const classes = useStyle()
    const dispatch = useDispatch<Dispatch<any>>()
    if (!users.length) return <div>users are not defined</div>
    return (
        <Grid container spacing={3}>
            {
                users.map(u => {
                    return (
                        <Grid container item key={u.id} xs={12} spacing={1}>
                            <Grid item xs={2} className={classes.photoWrapper}>
                                <Avatar className={classes.photo} alt={u.name}
                                        src={u.photos.small !== null ? u.photos.small : ''} component={NavLink}
                                        to={`/profile/${u.id}`}/>
                                {u.followed
                                    ? <Button className={classes.button} variant={'contained'} color={'primary'}
                                              disabled={followingProgress.some(id => id === u.id)}
                                              onClick={() => {
                                                  dispatch(unFollowTC(u.id))
                                              }
                                              }>Unfollow</Button>
                                    : <Button className={classes.button} variant={'contained'} color={'primary'}
                                              disabled={followingProgress.some(id => id === u.id)}
                                              onClick={() => {
                                                  dispatch(followTC(u.id))
                                              }
                                              }>Follow</Button>
                                }
                            </Grid>
                            <Grid item xs={6}>
                                <Paper elevation={3} className={classes.info}>
                                    <div>
                                        <Typography>
                                            {u.name}
                                        </Typography>
                                        <Typography>
                                            {u.status}
                                        </Typography>
                                    </div>
                                    <div>
                                        <Typography>
                                            {'u.country'}
                                        </Typography>
                                        <Typography>
                                            {'u.city'}
                                        </Typography>
                                    </div>
                                </Paper>
                            </Grid>
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}))