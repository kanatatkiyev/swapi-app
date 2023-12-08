import { getItem, LS_CHARACTERS_KEY } from '@shared/utils/ls';

export const restoreCharactersFromLS = (characters: Array<Character>) => {
    const charactersInLS = getItem<CharactersInLS>(LS_CHARACTERS_KEY);

    if (!charactersInLS) return characters;

    return characters.map(item => charactersInLS[item.created] || item);
};
