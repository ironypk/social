import React, {useState} from 'react'
import {Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
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
    listItem:{
        color:'rgba(0,0,0,0.87)'
    }
}));

type DrawerListItemType = 'Profile' | 'Dialogs' | 'News' | 'Music' | 'Settings'




export default function Navbar() {
    const drawerListItem: Array<DrawerListItemType> = ['Profile', 'Dialogs', 'News', 'Music', 'Settings']
    const classes = useStyles()
    return (
            <Drawer variant="permanent" className={classes.drawer} classes={{paper: classes.drawerPaper}}>
                <Toolbar/>
                <List>
                    {drawerListItem.map(text => (
                            <ListItem button className={classes.listItem} activeClassName={'Mui-selected'} key={text} component={NavLink} to={`/${text.toLowerCase()}`}>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText>{text}</ListItemText>
                            </ListItem>
                        )
                    )}
                </List>
            </Drawer>
    )
}