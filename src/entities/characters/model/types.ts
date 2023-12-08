type Characters = Array<Character>;

interface Pagination {
    count: number;
    page: number;
}

export interface CharactersState {
    list: Characters;
    isLoading: boolean;
    searchText: string;
    pagination: Pagination;
}
