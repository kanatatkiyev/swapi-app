export const getCharactersWithId = (characters: Array<Character>) =>
    characters.map(item => ({
        ...item,
        id: item.url.split('/').at(-2) || item.created
    }));
