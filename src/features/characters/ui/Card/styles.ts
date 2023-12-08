import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';

export const CardStyled = styled(Card)(({ theme }) => ({
    cursor: 'pointer',
    transition: 'background .3s',
    '&:hover': {
        background: theme.palette.success.dark
    }
}));
