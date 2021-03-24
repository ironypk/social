import React from 'react'
import {ListItem, ListItemIcon, ListItemText} from '@material-ui/core'
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
    listItem: {
        color: 'rgba(0,0,0,0.87)'
    },
    gridContainer:{
        padding:'5px 0 5px 0',
    }
}));


export type NavbarLinkPropsType = {
    title : string
}

export const NavbarLink:React.VFC<NavbarLinkPropsType> = ({title}) => {
    const classes = useStyles()
    return (
            <ListItem button className={classes.listItem} activeClassName={'Mui-selected'}
                      component={NavLink} to={`/${title.toLowerCase()}`}>
                <ListItemIcon>
                    <InboxIcon/>
                </ListItemIcon>
                <ListItemText>{title}</ListItemText>
            </ListItem>
    )
}