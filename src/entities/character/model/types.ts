type DefaultKey = keyof Character;

export interface ChangeCharacterParams<K extends DefaultKey = DefaultKey> {
    key: K;
    value: Character[K];
}

export type CharacterState = {
    character: Character | null;
    isLoading: boolean;
};

export type FetchCharacterByIdParams = string;
