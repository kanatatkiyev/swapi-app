import { configureStore } from '@reduxjs/toolkit';

import charactersReducer from '@entities/characters/model';
import characterReducer from '@entities/character/model';

const store = configureStore({
    reducer: {
        characters: charactersReducer,
        character: characterReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
