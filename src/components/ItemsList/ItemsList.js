import React from 'react';
import Item from '../Item/Item';

const ItemsList = ({items}) => (
    <ul>
        <li><Item todoText={items.todo1} /></li>
        <li><Item todoText={items.todo2} /></li>
        <li><Item todoText={'qwer'} /></li>
    </ul>
);

export default ItemsList;