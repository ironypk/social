import React from 'react';
import AppBar from "./components/AppBar";
import Drawer from "./components/Drawer";
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
