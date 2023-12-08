import { ChangeEvent } from 'react';

import { fetchCharactersTh } from '@entities/characters/model';

import { Pagination as UIPagination } from '@shared/ui/Pagination';
import { useDispatch, useAppSelector } from '@shared/hooks';

export const Pagination = () => {
    const dispatch = useDispatch();
    const {
        list,
        isLoading,
        pagination: { page, count }
    } = useAppSelector(state => state.characters);

    const isPaginationHidden = !list.length;

    const onPageChange = (_: ChangeEvent<unknown>, page: number) => {
        dispatch(fetchCharactersTh({ page }));
    };

    if (isPaginationHidden) return null;

    return <UIPagination page={page} count={count} onChange={onPageChange} disabled={isLoading} />;
};
