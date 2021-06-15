import React from 'react';
import {BaseTextFieldProps, Checkbox, TextField} from '@material-ui/core';
import {WrappedFieldProps} from 'redux-form';

export const renderTextField: React.FC<WrappedFieldProps & BaseTextFieldProps>
    = ({
           type,
           label,
           input,
            multiline,
    rows,
           meta: {touched, invalid, error},
           ...custom
       }) => {
    return (
        (
            <TextField
                variant={'outlined'}
                label={label}
                type={type}
                multiline={multiline}
                rows={rows}
                error={touched && invalid}
                helperText={touched && error}
                {...input}
                {...custom}
            />
        )
    )
}

export const renderCheckbox: React.FC<WrappedFieldProps> = ({input}) => (
    <Checkbox
        checked={input.value ? true : false}
        onChange={input.onChange}
    />
)