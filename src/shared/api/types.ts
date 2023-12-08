import { Method } from 'axios';

export interface AxiosParams {
    query?: Record<string, string>;
    method?: Method;
}
