import { FC, PropsWithChildren } from 'react';

import { ThemeProvider as MuiThemeProvider, createTheme, CssBaseline } from '@mui/material';

import { Toast } from '../../ui/Toast';

const theme = createTheme({ palette: { mode: 'dark' } });

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Toast />

            {children}
        </MuiThemeProvider>
    );
};
