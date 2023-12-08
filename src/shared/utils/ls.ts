export const LS_CHARACTERS_KEY = 'charactersMap';

export const getItem = <T>(key: string): T | null => {
    const item = localStorage.getItem(key);

    if (item) {
        try {
            return JSON.parse(item) as T;
        } catch (error) {
            console.error(`Error parsing localStorage item with key ${key}: ${error}`);
        }
    }

    return null;
};

export const setItem = (key: string, value: any) => {
    try {
        const valueToStore = JSON.stringify(value);

        localStorage.setItem(key, valueToStore);
    } catch (error) {
        console.error(`Error storing item in localStorage with key --> ${key}: ${error}`);
    }
};
