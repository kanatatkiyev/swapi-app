import { FC } from 'react';

import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

interface CardSectionProps {
    title: string;
    value: string;
}

export const CardSection: FC<CardSectionProps> = ({ title, value }) => {
    return (
        <Grid item xs={6}>
            <Stack direction="row" spacing={1} useFlexGap>
                <Typography>{title}:</Typography>
                <Typography>{value}</Typography>
            </Stack>
        </Grid>
    );
};
