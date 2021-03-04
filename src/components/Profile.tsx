import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import MyPosts from './MyPosts';


const useStyles = makeStyles(theme => ({}));


export default function Profile() {
    return (
        <div>
            <MyPosts/>
        </div>
    )
}