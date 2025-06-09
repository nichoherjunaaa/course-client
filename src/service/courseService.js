import { apiInstanceAuth } from './../utils/axios';

export const getCourse = async () => {
    const res = await apiInstanceAuth.get('/course');
    return res.data;
};