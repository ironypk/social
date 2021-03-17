import React, {useState} from 'react'
import {Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Avatar, Box, Grid} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {NavLink} from 'react-router-dom';
import InboxIcon from '@material-ui/icons/Inbox';
import {v1} from 'uuid';
import {SideBarItemType} from '../../redux';

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
    sideBar : Array<SideBarItemType>
}

const Navbar:React.FC<NavbarPropsType>=(props)=> {
    const classes = useStyles()
    return (
        <Drawer variant="permanent" className={classes.drawer} classes={{paper: classes.drawerPaper}}>
            <Toolbar/>
            <List>
                {props.sideBar.map(e => (

                        <div>
                            <ListItem button className={classes.listItem} activeClassName={'Mui-selected'} key={e.title}
                                      component={NavLink} to={`/${e.title.toLowerCase()}`}>
                                <ListItemIcon>
                                    <InboxIcon/>
                                </ListItemIcon>
                                <ListItemText>{e.title}</ListItemText>

                            </ListItem>
                            {e.friends && <Grid container spacing={1} direction='row' justify='space-between' className={classes.gridContainer}>
                                {e.friends.map(friend => {
                                    return (
                                        <Grid item xs={4}>
                                            <Box display='flex' justifyContent='center'>
                                                <Avatar src={friend.image}/>
                                            </Box>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                            }
                        </div>
                    )
                )}
            </List>
        </Drawer>
    )
}

export default Navbar