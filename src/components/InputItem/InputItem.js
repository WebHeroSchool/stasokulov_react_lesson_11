import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputItem = ({value, label, error, onChange}) => (
    <div>
        <TextField
            error = {error}
            id="addTask"
            value = {value}
            label={label}
            margin="dense"
            onChange={onChange}
        />
    </div>
);

export default InputItem;