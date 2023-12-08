export const getCharacterWithId = (character: Character) => ({
    ...character,
    id: character.url.split('/').at(-2) || character.created
});
