import React from 'react'
import {Drawer, Toolbar} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {Friends} from './Friends/Friends';
import {NavbarList} from './NavbarList/NavbarList';
import {NavbarPropsType} from './NavbarContainer';

const toolbarWidth = 200

const useStyles = makeStyles(theme => ({
    drawer: {
        width: toolbarWidth,
    },
    drawerPaper: {
        width: toolbarWidth
    },
    gridContainer: {
        padding: '5px 0 5px 0',
    }
}));


export const Navbar: React.FC<NavbarPropsType> = ({routes, friends}) => {
    const classes = useStyles()
    return (
        <Drawer variant="permanent" className={classes.drawer} classes={{paper: classes.drawerPaper}}>
            <Toolbar/>
            <NavbarList routes={routes}/>
            <Friends friends={friends}/>
        </Drawer>
    )
}