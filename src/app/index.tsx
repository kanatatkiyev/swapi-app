import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Root } from '@/pages/Root';
import { CharacterPage } from '@/pages/Character';
import { NotFoundPage } from '@/pages/NotFoundPage';

import { ThemeProvider } from '@shared/components/ThemeProvider';
import store from '@shared/store';

import './app.css';

export const App = () => (
    <Provider store={store}>
        <ThemeProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Navigate to="/characters" replace />} />
                    <Route path="/characters">
                        <Route index element={<Root />} />
                        <Route path=":id" element={<CharacterPage />} />
                    </Route>
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Router>
        </ThemeProvider>
    </Provider>
);
