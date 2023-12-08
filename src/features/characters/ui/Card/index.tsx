import { FC } from 'react';

import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

import { CardSection } from '@entities/characters/ui';

import { CardStyled } from './styles';
import { useNavigate } from 'react-router-dom';

interface CardProps {
    item: Character;
}

export const Card: FC<CardProps> = ({ item }) => {
    const navigate = useNavigate();
    const { id, name, birth_year, hair_color, height, mass, gender, eye_color, skin_color } = item;

    const handleClick = () => {
        navigate(`${id}`);
    };

    return (
        <Grid item md={6} xs={12}>
            <CardStyled onClick={handleClick}>
                <CardHeader title={name} />
                <CardContent>
                    <Grid container spacing={2}>
                        <CardSection title="Birth year" value={birth_year} />
                        <CardSection title="Height" value={height} />
                        <CardSection title="Gender" value={gender} />
                        <CardSection title="Mass (kg)" value={mass} />
                        <CardSection title="Skin color" value={skin_color} />
                        <CardSection title="Eye color" value={eye_color} />
                        <CardSection title="Hair color" value={hair_color} />
                    </Grid>
                </CardContent>
            </CardStyled>
        </Grid>
    );
};
