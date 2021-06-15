import React, {useEffect, useState} from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert, {AlertProps} from '@material-ui/lab/Alert'
import {useSelector} from 'react-redux';
import {AppStateType} from '../../../redux';

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />
}

export function ErrorSnackbar() {
    const [open,setOpen] = useState(false)
    const errorMessages = useSelector<AppStateType,string[]|null>(state => state.app.error)

    const handleClose = () => setOpen(false)

    useEffect(()=>{
        if(errorMessages?.length){
            setOpen(true)
        }
    },[errorMessages])

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={(handleClose)}>
            <Alert onClose={handleClose} severity="error">
                {errorMessages?.length && errorMessages[0]}
            </Alert>
        </Snackbar>
    )
}
