import baseAxios from './index';

export const fetchCharacters = ({ page = 1, search = '' }: FetchCharactersParams) => {
    const query = { page: `${page}`, search };
    return baseAxios<FetchCharactersResponse>('people', { query });
};

export const fetchCharacterById = (id: string) => {
    return baseAxios<Character>(`people/${id}`);
};
