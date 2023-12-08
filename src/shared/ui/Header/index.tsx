import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export const Header = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', height: 80 }} component="header">
            <Button variant="contained" onClick={() => navigate('/')}>
                Home page
            </Button>
        </Box>
    );
};
