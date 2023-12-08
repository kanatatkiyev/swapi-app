import { FC, PropsWithChildren } from 'react';

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import { Header } from '../Header';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <Container maxWidth="md">
            <Stack sx={{ height: '100vh', paddingBottom: '30px' }} spacing={2} useFlexGap>
                <Header />

                {children}
            </Stack>
        </Container>
    );
};
