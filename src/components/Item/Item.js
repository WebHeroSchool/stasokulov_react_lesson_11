import React from 'react';
import styles from './Item.module.css';
import classnames from 'classnames';

const Item = ({todoText, isDone}) => (
    <span className={
        classnames({
            [styles.item]: true,
            [styles.done]: isDone
        })
    }>
        {todoText}
    </span>
);

export default Item;