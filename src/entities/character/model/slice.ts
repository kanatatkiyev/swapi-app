import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getItem, setItem, LS_CHARACTERS_KEY } from '@/shared/utils/ls';

import { fetchCharacterByIdTh, fetchCharacterByIdBuilders } from './thunks/fetchCharacterById';

import { initialState } from './initialState';
import { ChangeCharacterParams } from './types';

export const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {
        setCharacter: (state, { payload }: PayloadAction<Character | null>) => {
            state.character = payload;
        },
        changeCharacter: (state, { payload }: PayloadAction<ChangeCharacterParams>) => {
            if (state.character) {
                const characters = getItem<Record<string, boolean>>(LS_CHARACTERS_KEY);

                state.character[payload.key] = payload.value;
                setItem(LS_CHARACTERS_KEY, {
                    ...characters,
                    [state.character.created]: state.character
                });
            }
        }
    },
    extraReducers(builder) {
        fetchCharacterByIdBuilders(builder);
    }
});

export { fetchCharacterByIdTh };
export const characterActions = { ...characterSlice.actions };
export default characterSlice.reducer;
