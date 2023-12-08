import { CharactersState } from './types';

export const initialState: CharactersState = {
    list: [],
    isLoading: false,
    searchText: '',
    pagination: {
        count: 0,
        page: 1
    }
};
