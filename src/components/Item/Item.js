import React from 'react';
import styles from './Item.module.css';
import classnames from 'classnames';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';

const Item = ({item}) => (
    <div>
        <ListItem key={item.value}>
                <Checkbox
                    
                    tabIndex={-1}
                    disableRipple
                />
                <ListItemText primary={item.value} />
                <ListItemSecondaryAction>
                    <IconButton aria-label="Delete">
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
        </ListItem>
        <Divider light />
    </div>
);

export default Item;