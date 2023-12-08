import { FC, useEffect } from 'react';

import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

import { useDispatch, useAppSelector } from '@/shared/hooks';

import { Field } from '@features/character/ui';

import { fetchCharacterByIdTh, characterActions } from '@entities/character/model';
import { Title, SkeletonFields } from '@entities/character/ui';

interface CharacterProps {
    id?: string;
}

const { changeCharacter, setCharacter } = characterActions;

export const CharacterCard: FC<CharacterProps> = ({ id }) => {
    const dispatch = useDispatch();
    const { character, isLoading } = useAppSelector(state => state.character);

    useEffect(() => {
        if (id) {
            dispatch(fetchCharacterByIdTh(id));
        }
    }, [id, dispatch]);

    useEffect(
        () => () => {
            setCharacter(null);
        },
        []
    );

    if (!character || isLoading) return <SkeletonFields />;

    const { name, birth_year, height, gender, mass, hair_color, eye_color, skin_color } = character;

    const handleChange = (key: keyof Character) => (newValue: string) => {
        dispatch(changeCharacter({ key, value: newValue }));
    };

    return (
        <Stack spacing={3} useFlexGap>
            <Title title={name} />

            <Grid container spacing={2}>
                <Field label="Birth year" name="birth_year" onChange={handleChange} value={birth_year} />
                <Field label="Height" name="height" onChange={handleChange} value={height} />
                <Field label="Gender" name="gender" onChange={handleChange} value={gender} />
                <Field label="Mass" name="mass" onChange={handleChange} value={mass} />
                <Field label="Hair color" name="hair_color" onChange={handleChange} value={hair_color} />
                <Field label="Eye color" name="eye_color" onChange={handleChange} value={eye_color} />
                <Field label="Skin color" name="skin_color" onChange={handleChange} value={skin_color} />
            </Grid>
        </Stack>
    );
};
