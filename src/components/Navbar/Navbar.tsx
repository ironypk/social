import React from 'react'
import {Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {FriendType, RoutesType} from '../../redux';
import Friends from './Friends/Friends';
import {NavbarLink} from './NavbarLink/NavbarLink';
import {NavLink} from 'react-router-dom';
import InboxIcon from '@material-ui/icons/Inbox';

const toolbarWidth = 200

const useStyles = makeStyles(theme => ({
    drawer: {
        width: toolbarWidth,
    },
    drawerPaper: {
        width: toolbarWidth
    },
    gridContainer:{
        padding:'5px 0 5px 0',
    }
}));

export type NavbarPropsType = {
    /**
     * Array of routes which transform into NavLink
     */
    routes : RoutesType[]
    /**
     * Array of friends in online.
     */
    friends?: FriendType[]
}

const Navbar:React.FC<NavbarPropsType>=(props)=> {
    const classes = useStyles()
    return (
        <Drawer variant="permanent" className={classes.drawer} classes={{paper: classes.drawerPaper}}>
            <Toolbar/>
            <List>
                {props.routes.map(e => <NavbarLink title={e.title} key={e.title}/>)}
            </List>
            <Friends friends={props.friends}/>
        </Drawer>
    )
}

export default Navbar