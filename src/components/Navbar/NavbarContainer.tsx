import {SideBarType} from '../../redux/reducers/sidebarReducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux';
import {Navbar} from './Navbar';

type MapStatePropsType = SideBarType

export type NavbarPropsType = MapStatePropsType

const masStateToProps = (state:AppStateType):MapStatePropsType => {
    return {
        friends: state.sideBar.friends,
        routes: state.sideBar.routes
    }
}

export const NavbarContainer = connect(masStateToProps)(Navbar)