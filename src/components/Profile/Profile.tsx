import React, {useCallback, useEffect} from 'react'
import {Posts} from './Posts/Posts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect, useHistory, useParams} from 'react-router-dom'
import {profilePageAction, ProfilePageType, setProfile,} from '../../redux/reducers/profilePageReducer';
import {Dispatch} from 'redux';
import {CircularProgress} from '@material-ui/core';
import {AppStateType} from '../../redux';
import {AuthStateType} from '../../redux/reducers/authReducer';
import {IProfileForm, ProfileReduxForm} from './ProfileForm/ProfileForm';
import {reset} from 'redux-form';


export const Profile = React.memo(() => {
    const {profileInfo,posts,isLoading} = useSelector((state:AppStateType):ProfilePageType =>state.profilePage)
    const {userId : useProfileID} = profileInfo
    const {id:myID} = useSelector((state:AppStateType):AuthStateType => state.auth)
    let {userID : userQueryID = myID} = useParams<{userID:string}>()
    const dispatch = useDispatch<Dispatch<any>>()
    const history = useHistory()
    const onSubmitHandler = useCallback((data:IProfileForm) => {
        dispatch(profilePageAction.addPost(data.message))
        dispatch(reset('profile'))
    },[dispatch])

    useEffect(() => {
        if(userQueryID){
            dispatch(setProfile(userQueryID))
        }
    }, [dispatch,userQueryID])

    if(!userQueryID && !myID) {
        return <Redirect to={'/login'}/>
    } else if (isLoading) {
        return <CircularProgress/>
    } else if(!useProfileID) {
        return <div>User not found</div>
    }
    return (
        <div>
            <ProfileInfo profileInfo={profileInfo}/>
            <ProfileReduxForm onSubmit={onSubmitHandler}/>
            <Posts posts={posts}/>
        </div>
    )
})
