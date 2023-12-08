import { FC, useEffect, useState } from 'react';

import Grid from '@mui/material/Grid';

import { Input } from '@shared/ui/Input';
import { useDebounce } from '@/shared/hooks';
import { sendSuccessNotification } from '@/shared/utils/toast';

interface FieldProps {
    label: string;
    value: string;
    name: keyof Character;
    onChange: (key: keyof Character) => (value: string) => void;
}

export const Field: FC<FieldProps> = ({ label, value, onChange, name }) => {
    const [changed, setChanged] = useState(false);
    const [text, setText] = useState(value);
    const debouncedValue = useDebounce(text, 700);

    useEffect(() => {
        if (changed) {
            onChange(name)(text);
            sendSuccessNotification(`${label} field saved`);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedValue]);

    const handleChange = (text: string) => {
        setText(text);
        setChanged(true);
    };

    return (
        <Grid item xs={12} md={6}>
            <Input label={label} value={text} onChange={handleChange} placeholder="Enter new field value..." />
        </Grid>
    );
};
