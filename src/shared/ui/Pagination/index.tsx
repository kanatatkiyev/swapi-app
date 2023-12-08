import { FC, ChangeEvent } from 'react';

import MuiPagination from '@mui/material/Pagination';

interface PaginationProps {
    page: number;
    count: number;
    onChange: (event: ChangeEvent<unknown>, page: number) => void;
    disabled?: boolean;
}

export const Pagination: FC<PaginationProps> = ({ onChange, count, page, disabled }) => {
    return (
        <MuiPagination
            count={count}
            page={page}
            onChange={onChange}
            variant="outlined"
            shape="rounded"
            size="large"
            disabled={disabled}
        />
    );
};
