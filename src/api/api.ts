import axios from 'axios';
import {UsersResponseType} from '../redux/reducers/usersPageReducer';
import {ILogin} from '../components/Login/Login';


export interface IAuthLogin {
    email:string
    password:string
    rememberMe:boolean
    captcha:boolean
}


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '80430c39-f61f-48a5-9b67-86513a5bd882'
    }

})

export const usersAPI = {
    getUsers: (currentPage: number = 1, pageSize: number = 10):Promise<UsersResponseType> => {
        return instance
            .get(`users?page=${currentPage}&${pageSize}`)
            .then(res => res.data)
    }
}
export const followAPI = {
    unFollow: (id: number) => {
        return instance
            .delete(`follow/${id}`)
            .then(res => res.data)
    },
    follow: (id: number) => {
        return instance
            .post(`follow/${id}`)
            .then(res => res.data)
    }
}
export const profileAPI = {
    getProfile: (userID: string | number) => {
        return instance
            .get(`profile/${userID}`)
            .then(res => res.data)
    },
    updateStatus:(status:string):Promise<{resultCode:0|1, messages:string[], data:{}}> => {
        return instance
            .put(`profile/status`, {status})
            .then(res=>res.data)
    },
    getStatus:(userID:string | number) => {
        return instance
            .get(`profile/status/${userID}`)
            .then(res=>res.data)
    }
}
export const authMe = {
    me: () => {
        return instance
            .get(`auth/me`)
            .then(res => res.data)
    },
    login:(loginData: ILogin):Promise<{ resultCode:number,messages:string[],data:{} }>=>{
        return instance
            .post(`auth/login`,{...loginData})
            .then(res=>res.data)
    },
    logout:()=>{
        return instance
            .delete(`auth/login`)
            .then(res=>res.data)
    }
}