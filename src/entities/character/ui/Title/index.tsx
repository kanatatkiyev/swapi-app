import { FC } from 'react';

import Typography from '@mui/material/Typography';

interface TitleProps {
    title: string;
}

export const Title: FC<TitleProps> = ({ title }) => {
    return <Typography variant="h3">{title}</Typography>;
};
