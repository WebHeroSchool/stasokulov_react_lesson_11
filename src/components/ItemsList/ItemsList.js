import React from 'react';
import List from '@material-ui/core/List';
import Item from '../Item/Item';

const ItemsList = ({items, onClickDone}) => (
    <List>
        {items.map(item => (
            <Item value={item.value} isDone={item.isDone} onClickDone={onClickDone} />
        ))}
    </List>
);

export default ItemsList;