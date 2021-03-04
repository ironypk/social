import React from 'react';
import AppBar from "./components/Header";
import Drawer from "./components/LeftBar";
import Main from "./components/Main";
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
        <Main/>
    </div>
)
}

export default App;
