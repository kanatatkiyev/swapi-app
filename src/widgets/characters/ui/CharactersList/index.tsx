import { useEffect } from 'react';

import { Card, Pagination, Search } from '@features/characters/ui';

import { EmptyMessage, SkeletonList } from '@entities/characters/ui';
import { fetchCharactersTh } from '@entities/characters/model';

import { useDispatch, useAppSelector } from '@shared/hooks';

import { GridStyled } from './styles';

export const List = () => {
    const dispatch = useDispatch();
    const { list, isLoading } = useAppSelector(state => state.characters);

    const isListEmpty = !list.length && !isLoading;

    useEffect(() => {
        dispatch(fetchCharactersTh());
    }, [dispatch]);

    return (
        <>
            <Search />

            {isListEmpty && <EmptyMessage />}

            <GridStyled container spacing={2}>
                {!isLoading ? list.map(item => <Card item={item} key={item.id} />) : <SkeletonList />}
            </GridStyled>

            <Pagination />
        </>
    );
};
