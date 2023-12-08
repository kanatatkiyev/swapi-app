import { getCharacterWithId } from '../getCharacterWithId';

describe('getCharacterWithId test', () => {
    it('empty character', () => {
        const data = {} as Character;

        expect(getCharacterWithId(data)).toEqual({});
    });

    it('character without url', () => {
        const data = { name: 'Luke Skywalker', created: 'abc' } as Character;

        expect(getCharacterWithId(data)).toEqual({ ...data, id: data.created });
    });

    it('character with url', () => {
        const data = { name: 'Luke Skywalker', created: 'abc', url: 'https://swapi.dev/people/1/' } as Character;

        expect(getCharacterWithId(data)).toEqual({ ...data, id: '1' });
    });
});
