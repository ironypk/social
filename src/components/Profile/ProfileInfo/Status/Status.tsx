import React, {ChangeEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../../redux';
import {getStatusTC, ProfilePageType, updateStatusTC} from '../../../../redux/reducers/profilePageReducer';
import {CircularProgress, TextField, Typography} from '@material-ui/core';
import {AuthStateType} from '../../../../redux/reducers/authReducer';

export const Status = React.memo(() => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState('')
    const [tempStatus, setTempStatus] = useState(status)
    const profilePageState = useSelector((state: AppStateType): ProfilePageType => state.profilePage)
    const {id:myID} = useSelector((state:AppStateType):AuthStateType=> state.auth)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(updateStatusTC(status))
    }, [dispatch, status])

    useEffect(()=>{
        dispatch(getStatusTC(profilePageState.profileInfo.userId))
    },[dispatch,profilePageState.profileInfo.userId])

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setTempStatus(e.currentTarget.value)
    }
    const onBlurHandler = () => {
        if (tempStatus !== status) {
            setStatus(tempStatus)
        }
        setEditMode(false)
    }
    const onDoubleClickHandler = () => {
        if(myID === profilePageState.profileInfo.userId){
            setEditMode(true)
        }
    }

    if(profilePageState.isLoading) return <CircularProgress/>

    return (
        <div>
            {
                editMode
                    ? <TextField value={tempStatus} autoFocus={true} onChange={onChangeHandler} onBlur={onBlurHandler}/>
                    : <Typography onDoubleClick={onDoubleClickHandler}>
                        {profilePageState.status ? profilePageState.status : 'нет статуса'}
                    </Typography>
            }
        </div>
    )
})