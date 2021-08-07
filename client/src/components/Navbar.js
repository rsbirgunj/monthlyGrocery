import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme)=>({
    container : {
        backgroundColor : '#00A3A3',
    },
    title : {
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        color: '#AE0000',
        margin : 'auto',
        fontFamily : 'Dancing Script',
        fontWeight : 600,
        fontSize : 40,
    }
}));


const Navbar = (props) => {
    const classes = useStyles();
  return(
    <AppBar position="sticky" className={classes.container}>
        <Toolbar>
            <Typography variant="h4" className={classes.title}> Monthly Grocery Planning</Typography>
        </Toolbar>
    </AppBar>
   )

 }

export default Navbar;