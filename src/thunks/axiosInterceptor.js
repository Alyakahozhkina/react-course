import { toast } from 'react-toastify';
import API from '../api/api';
import { successToast } from '../utils/consts/notificationMessages';
import { del, post, put } from '../utils/consts/httpMethodsConstants';

const axiosInterceptor = () => {
  API.interceptors.response.use((response) => {
    if (response.config.method === post || response.config.method === put || response.config.method === del) {
      toast.success(`${successToast(response.config.method)} was successfully completed`);
    }
    return response;
  }, (error) => {
    toast.error(`${error.message}`);
    toast.clearWaitingQueue();
    return Promise.reject(error);
  });
};

export default axiosInterceptor;
