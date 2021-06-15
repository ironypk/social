import React, {ChangeEvent, useEffect} from 'react'
import Pagination from '@material-ui/lab/Pagination';
import {getUsers, setCurrentPage} from '../../redux/reducers/usersPageReducer';
import {useDispatch, useSelector} from 'react-redux';
import {SelectUsers} from './selectUsers';
import {Dispatch} from 'redux';
import {UsersList} from './UsersList';
import {CircularProgress} from '@material-ui/core';
import {AppStateType} from '../../redux';


export const Users:React.FC = React.memo((() => {
    const {users, totalCount, currentPage, pageSize, followingProgress} = useSelector(SelectUsers)
    const isLoading = useSelector((state: AppStateType): boolean => state.app.isLoading)
    const dispatch = useDispatch<Dispatch<any>>()
    const count = Math.ceil(totalCount / pageSize)
    useEffect(() => {
        dispatch(getUsers(currentPage, pageSize))
    }, [dispatch, currentPage, pageSize])
    const currentPageHandler = (e: ChangeEvent<unknown>, page: number) => {
        dispatch(setCurrentPage(page))
    }
    if (isLoading) return <CircularProgress/>
    return (
        <div>
            <Pagination count={count} page={currentPage} onChange={currentPageHandler} variant="outlined"
                        shape="rounded"/>
            <UsersList users={users} followingProgress={followingProgress}/>
        </div>
    )
}))
