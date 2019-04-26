import React from 'react';
import List from '@material-ui/core/List';
import Item from '../Item/Item';

const ItemsList = ({items, onClickDone, onClickDelete}) => (
    <List>
        {items.map(item => (
            <Item
                value={item.value}
                isDone={item.isDone}
                id={item.id}
                onClickDone={onClickDone}
                onClickDelete={onClickDelete}
            />
        ))}
    </List>
);

export default ItemsList;