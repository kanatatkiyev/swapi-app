import { toast } from 'react-toastify';

export const sendErrorNotification = (message: string) => {
    toast(message, {
        toastId: String(Math.random()),
        type: 'error'
    });
};

export const sendSuccessNotification = (message: string) => {
    toast(message, {
        toastId: String(Math.random()),
        type: 'success'
    });
};
