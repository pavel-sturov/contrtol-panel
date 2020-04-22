import React from 'react'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types'

export const TextInput = ({ label, name, ...props }) => {
    return (
        <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id={name}
            label={label}
            name={name}
            autoComplete={name}
            {...props}
        />
    )
}

TextInput.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
}
