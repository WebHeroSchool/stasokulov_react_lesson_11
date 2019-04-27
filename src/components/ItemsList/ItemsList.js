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

ItemsList.defaultProps = {
    items: [{
        value: 'Упс, задачи не найдены.',
        isDone: false,
    }]
}


export default ItemsList;