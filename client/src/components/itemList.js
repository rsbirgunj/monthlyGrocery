import Axios from 'axios'
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Button from '@material-ui/core/Button';
import Delete from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';


import React from 'react'
import {
    createStyles,
    makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            width: "100%",
            maxWidth: 450,
            backgroundColor: theme.palette.background.paper,
            position: "relative",
            overflow: "auto",
            maxHeight: 300,
            marginTop: '0.3em'
        },
        listSection: {
        },
        ul: {
            height: '1em',
            color: 'black',
            padding: 0,
        },
    })
);


const ItemList = (props) => {
    const [orderStatus, setOrderStatus] = React.useState(false)
    const handleClick = (value) => {
        const data = { id: value._id }
        Axios.post('http://localhost:3000/groccery/updatePurchaseStatus', data).then(response => {
            setOrderStatus(!orderStatus)
        })
    }
    const handelDelete = (value) => {
        const data = { id: value._id }
        console.log(data)
        Axios.post('http://localhost:3000/groccery/deleteGrocceryItem', data).then(response => {
            setOrderStatus(!orderStatus)
        })
    }
    const classes = useStyles();
    return (
        <List dense className={classes.root}>
            {props.items.map((value) => {
                return (
                    <ListItem key={value._id} button>
                        <ListItemText id={value._id} className={classes.ul} primary={value.grocceryItem} />
                        <ListItemSecondaryAction>
                            <Button variant="outlined" color="primary" onClick={() => {
                                handleClick(value)
                            }}>{value.isPurchased ? 'Purchased' : 'To purchase'}</Button>
                            <IconButton color="primary" aria-label="upload picture" component="span" onClick={()=>{handelDelete(value)}}>
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                );
            })}
        </List>
    )
}

export default ItemList