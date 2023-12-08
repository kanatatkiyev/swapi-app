import { createAsyncThunk, ActionReducerMapBuilder } from '@reduxjs/toolkit';

import { fetchCharacterById } from '@/shared/api/services';
import { sendErrorNotification } from '@/shared/utils/toast';
import { getItem } from '@/shared/utils/ls';

import { CharacterState, FetchCharacterByIdParams } from '../types';
import { getCharacterWithId } from '../../utils/getCharacterWithId';

export const fetchCharacterByIdTh = createAsyncThunk<Character, FetchCharacterByIdParams>(
    'character/fetchCharacterById',
    async id => {
        const response = await fetchCharacterById(id);

        return response;
    }
);

export const fetchCharacterByIdBuilders = (builder: ActionReducerMapBuilder<CharacterState>) => {
    builder.addCase(fetchCharacterByIdTh.fulfilled, (state, { payload }) => {
        const charactedCreated = payload.created;
        const storedItem = getItem<Character>(charactedCreated);

        state.character = storedItem || getCharacterWithId(payload);
        state.isLoading = false;
    });
    builder.addCase(fetchCharacterByIdTh.pending, state => {
        state.isLoading = true;
    });
    builder.addCase(fetchCharacterByIdTh.rejected, (state, action) => {
        state.isLoading = false;
        sendErrorNotification(action.error?.message || 'Somthing went wrong');
    });
};
