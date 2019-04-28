import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const InputItem = ({value, error, onChange}) => (
    <div>
        <TextField
            error = {error}
            id="addTask"
            value = {value}
            label = {error ? 'Введите что-нибудь' : 'Добавить задачу'}
            margin="dense"
            onChange={onChange}
        />
    </div>
);

InputItem.propTypes = {
    value: PropTypes.oneOfType ([
        PropTypes.string,
        PropTypes.number
    ])
};
    


export default InputItem;