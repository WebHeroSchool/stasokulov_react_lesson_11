import React from 'react';
import Item from '../Item/Item';

const ItemsList = ({items}) => (
    <ul>
        { items.map(item => <li key={item.value}><Item todoText={item.value} /></li>) }
    </ul>
);

export default ItemsList;