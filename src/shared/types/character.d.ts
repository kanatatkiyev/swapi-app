declare global {
    interface Character {
        id: string;
        name: string;
        height: string;
        mass: string;
        hair_color: string;
        skin_color: string;
        eye_color: string;
        birth_year: string;
        gender: string;
        created: string;
        edited: string;
        url: string;
    }

    // Characters in local storage
    type CharactersInLS = Record<string, Character>;
}

export {};
