import { apiInstanceAuth } from './../utils/axios';

export const getCourse = async () => {
    const res = await apiInstanceAuth.get('/course');
    return res.data;
};

export const getCategories = async() => {
    const res = await apiInstanceAuth.get('/course/categories')
    return res.data;
}