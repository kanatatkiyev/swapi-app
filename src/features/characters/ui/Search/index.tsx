import { useEffect, useState } from 'react';

import { fetchCharactersTh, charactersActions } from '@entities/characters/model';

import { useDebounce, useDispatch, useAppSelector } from '@/shared/hooks';
import { Input } from '@shared/ui/Input';

const { setSearchText } = charactersActions;

export const Search = () => {
    const [changed, setChanged] = useState(false);
    const dispatch = useDispatch();
    const searchText = useAppSelector(state => state.characters.searchText);
    const debouncedText = useDebounce(searchText);

    const handleChange = (text: string) => {
        dispatch(setSearchText(text));
        setChanged(true);
    };

    useEffect(() => {
        if (changed) {
            dispatch(fetchCharactersTh({ search: debouncedText }));
        }
    }, [debouncedText, dispatch, changed]);

    return <Input value={searchText} onChange={handleChange} label="Search a character" />;
};
