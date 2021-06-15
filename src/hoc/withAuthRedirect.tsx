import React from 'react'
import {useSelector} from 'react-redux';
import {AppStateType} from '../redux';
import {AuthStateType} from '../redux/reducers/authReducer';
import {Redirect} from 'react-router-dom'

// export function withAuthRedirect<T>(Component: ComponentType<T>) {
//     function RedirectComponent (props:any) {
//         const {isLogin} = useSelector((state: AppStateType): AuthStateType => state.auth)
//         if (!isLogin) {
//             return <Redirect to={'/login'}/>
//         }
//         return <Component {...props}/>
//     }
//     return RedirectComponent
// }


export const WithAuthRedirect: React.FC = React.memo(({children}) => {
    const {isLogin} = useSelector((state: AppStateType): AuthStateType => state.auth)
    const isLoading = useSelector((state: AppStateType): boolean => state.app.isLoading)
    if (!isLogin && !isLoading) {
        return <Redirect to={'/login'}/>
    }
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
})
