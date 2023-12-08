import { useParams } from 'react-router-dom';

import { CharacterCard } from '@widgets/character/ui';

import { Layout } from '@shared/ui/Layout';

export const CharacterPage = () => {
    const { id } = useParams();

    return (
        <Layout>
            <CharacterCard id={id} />
        </Layout>
    );
};
