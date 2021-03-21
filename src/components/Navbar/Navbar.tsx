import React from 'react'
import {Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {NavLink} from 'react-router-dom';
import InboxIcon from '@material-ui/icons/Inbox';
import {FriendType, RoutesType} from '../../redux';
import Friends from './Friends';

const toolbarWidth = 200

const useStyles = makeStyles(theme => ({
    drawer: {
        width: toolbarWidth,
    },
    drawerPaper: {
        width: toolbarWidth
    },
    listItem: {
        color: 'rgba(0,0,0,0.87)'
    },
    gridContainer:{
        padding:'5px 0 5px 0',
    }
}));

type NavbarPropsType = {
    routes : RoutesType[]
    friends : FriendType[]
}

const Navbar:React.FC<NavbarPropsType>=(props)=> {
    const classes = useStyles()
    return (
        <Drawer variant="permanent" className={classes.drawer} classes={{paper: classes.drawerPaper}}>
            <Toolbar/>
            <List>
                {props.routes.map(e => (
                        <div>
                            <ListItem button className={classes.listItem} activeClassName={'Mui-selected'} key={e.title}
                                      component={NavLink} to={`/${e.title.toLowerCase()}`}>
                                <ListItemIcon>
                                    <InboxIcon/>
                                </ListItemIcon>
                                <ListItemText>{e.title}</ListItemText>
                            </ListItem>
                        </div>
                    )
                )}

                <Friends friends={props.friends}/>

            </List>
        </Drawer>
    )
}

export default Navbar