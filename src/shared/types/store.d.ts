declare global {
    type RootState = import('../store').RootState;
    type AppDispatch = import('../store').AppDispatch;

    interface ThunkAPI<T = string> {
        dispatch: AppDispatch;
        state: RootState;
        rejectValue: T;
    }
}

export {};
