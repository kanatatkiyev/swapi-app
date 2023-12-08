import { createAsyncThunk, ActionReducerMapBuilder } from '@reduxjs/toolkit';

import { fetchCharacters } from '@shared/api/services';
import { sendErrorNotification } from '@shared/utils/toast';

import { CharactersState } from '../types';
import { getCharactersWithId } from '../../utils/getCharactersWithId';
import { restoreCharactersFromLS } from '../../utils/restoreCharactersFromLS';

export const fetchCharactersTh = createAsyncThunk<FetchCharactersResponse, FetchCharactersParams | undefined, ThunkAPI>(
    'characters/fetchCharacters',
    async (params, api) => {
        const { characters } = api.getState();

        const search = characters.searchText;
        const statePage = characters.pagination.page;

        const page = params?.search ? 1 : params?.page || statePage;
        const response = await fetchCharacters({ page, search });

        return response;
    }
);

export const fetchCharactersBuilders = (builder: ActionReducerMapBuilder<CharactersState>) => {
    builder.addCase(fetchCharactersTh.fulfilled, (state, { payload, meta }) => {
        const { results, count } = payload;
        const { page, search } = meta.arg || {};

        state.list = [...restoreCharactersFromLS(getCharactersWithId(results))];
        state.pagination.count = Math.ceil(count / 10);
        state.isLoading = false;

        if (page) {
            state.pagination.page = page;
        }
        if (search) {
            state.pagination.page = 1;
        }
    });
    builder.addCase(fetchCharactersTh.pending, state => {
        state.isLoading = true;
    });
    builder.addCase(fetchCharactersTh.rejected, (state, action) => {
        state.isLoading = false;
        sendErrorNotification(action.error?.message || 'Somthing went wrong');
    });
};
