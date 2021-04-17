import {addPost, changeNewPostText, ProfilePageType} from '../../redux/reducers/profilePageReducer'
import {connect} from 'react-redux';
import {AppStateType} from '../../redux';
import {Profile} from './Profile';
import {Dispatch} from 'redux';


type MapStateToPropsType = ProfilePageType

type MapDispatchToPropsType = {
    changeNewPostText: (value: string) => void
    addPost: () => void
}

export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        profileInfo: state.profilePage.profileInfo,
        newText: state.profilePage.newText,
        title: state.profilePage.title
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        changeNewPostText: (value: string) => {
            dispatch(changeNewPostText(value))
        },
        addPost: () => {
            dispatch(addPost())
        }
    }
}


export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)