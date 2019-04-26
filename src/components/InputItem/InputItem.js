import React from 'react';
import TextField from '@material-ui/core/TextField';

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

export default InputItem;