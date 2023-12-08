import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState } from './initialState';
import { fetchCharactersBuilders, fetchCharactersTh } from './thunks/fetchCharactersTh';

const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        setSearchText: (state, { payload }: PayloadAction<string>) => {
            state.searchText = payload;
        }
    },
    extraReducers(builder) {
        fetchCharactersBuilders(builder);
    }
});

export { fetchCharactersTh };
export const charactersActions = { ...charactersSlice.actions };
export default charactersSlice.reducer;
