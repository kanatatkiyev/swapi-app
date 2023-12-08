declare global {
    interface FetchCharactersParams {
        page?: number;
        search?: string;
    }

    interface FetchCharactersResponse {
        count: number;
        next: string;
        previous: string;
        results: Array<Character>;
    }
}

export {};
