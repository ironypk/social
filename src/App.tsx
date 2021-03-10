import React from 'react';
import AppBar from "./components/Header/Header";
import Drawer from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
    root:{
        display:'flex'
    }
}));

function App() {
    const classes = useStyles()
return (
    <div className={classes.root}>
        <AppBar/>
        <Drawer/>
        <Profile/>
    </div>
)
}

export default App;
