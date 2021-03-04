import React from 'react'
import {Drawer, List, ListItem, ListItemText,Toolbar} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const toolbarWidth = 200

const useStyles = makeStyles(theme => ({
    drawer:{
        width:toolbarWidth,
    },
    drawerPaper:{
        width :toolbarWidth
    }
}));


export default function() {
    const drawerListItem: Array<string> = ['Profile', 'Messages', 'News', 'Music', 'Settings']
    const classes = useStyles()
    return (
        <Drawer variant="permanent" className={classes.drawer} classes={{paper:classes.drawerPaper}}>
            <Toolbar />
                <List>
                    {drawerListItem.map(text => (
                            <ListItem button key={text}>
                                <ListItemText primary={text}/>
                            </ListItem>
                        )
                    )}
                </List>
        </Drawer>
    )
}