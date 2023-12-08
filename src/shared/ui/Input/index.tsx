import { ChangeEvent, FC } from 'react';

import TextField from '@mui/material/TextField';

interface InputProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export const Input: FC<InputProps> = ({ label, value, onChange, placeholder = '' }) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;

        onChange(value);
    };

    return (
        <TextField
            label={label}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            sx={{ width: '100%' }}
        />
    );
};
