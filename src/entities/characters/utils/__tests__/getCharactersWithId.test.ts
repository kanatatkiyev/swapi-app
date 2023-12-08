import { getCharactersWithId } from '../getCharactersWithId';

describe('getCharactersWithId test', () => {
    it('characters empty', () => {
        const data = [] as Array<Character>;
        const result = [] as Array<Character>;

        expect(getCharactersWithId(data)).toEqual(result);
    });

    it('characters without url field', () => {
        const data = [{ name: 'Luke Skywalker', created: 'abc' }] as Array<Character>;
        const result = [{ name: 'Luke Skywalker', created: 'abc', id: 'abc' }];

        expect(getCharactersWithId(data)).toEqual(result);
    });

    it('characters with url field', () => {
        const data = [
            { name: 'Luke Skywalker', created: 'abc', url: 'https://swapi.dev/people/1/' }
        ] as Array<Character>;
        const result = [{ name: 'Luke Skywalker', url: 'https://swapi.dev/people/1/', created: 'abc', id: '1' }];

        expect(getCharactersWithId(data)).toEqual(result);
    });
});
