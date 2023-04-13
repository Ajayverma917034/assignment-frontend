import { Avatar, InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';
import pendingIcon from '../../img/progress1.svg';
import { useValue } from '../../context/ContextProvider';
import CheckIcon from '@mui/icons-material/Check';

let timer;
const InfoField2 = ({ mainProps, optionalProps = {}, minLength }) => {
    const { dispatch } = useValue();
    const [editing, setEditing] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const handleChange = (e) => {
        dispatch({
            type: 'UPDATE_MAGAZINES',
            payload: { [e.target.name]: e.target.value },
        });
        if (!editing) setEditing(true);
        clearTimeout(timer);
        timer = setTimeout(() => {
            setEditing(false);
            if (e.target.value.length < minLength) {
                if (!error) setError(true);
                if (success) setSuccess(false);
            } else {
                if (error) setError(false);
                if (!success) setSuccess(true);
            }
        }, 1000);
    };
    return (
        <TextField
            {...mainProps}
            {...optionalProps}
            error={error}
            helperText={error && `This field must be ${minLength} characters or more`}
            color={success ? 'success' : 'primary'}
            variant="outlined"
            onChange={handleChange}
            required
            InputProps={{
                endAdornment: (
                    <InputAdornment postion="end">
                        {editing ? (
                            <Avatar src={pendingIcon} sx={{ height: 70 }} />
                        ) : (
                            success && <CheckIcon color="success" />
                        )}
                    </InputAdornment>
                ),
            }}
        />
    );
};

export default InfoField2;