import React from 'react';
import List from '@material-ui/core/List';
import Item from '../Item/Item';

const ItemsList = ({items}) => (
    <List>
        {items.map(item => (
            <Item item = {item}/>
        ))}
    </List>
);

export default ItemsList;