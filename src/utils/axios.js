import axios from 'axios';
import { STORAGE_KEY } from './const';
import secureLocalStorage from 'react-secure-storage';

const apiInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 3000
})

export const apiInstanceAuth = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 3000
})

apiInstanceAuth.interceptors.request.use((config) => {
    const session = secureLocalStorage.getItem(STORAGE_KEY);
    if (!session) {
        return config
    }
    config.headers.Authorization = `JWT ${session.token}`;
    return config
});

export default apiInstance