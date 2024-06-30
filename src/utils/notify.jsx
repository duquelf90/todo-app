import { toast } from 'react-toastify';

export const showSuccessNotification = (message) => {
  toast.success(message,{position:"bottom-right"});
};

export const showWarningNotification = (message) => {
  toast.warning(message,{position:"bottom-right"});
};