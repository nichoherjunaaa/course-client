import { apiInstanceAuth } from './../utils/axios';

export const getCourse = async () => {
    const res = await apiInstanceAuth.get('/course');
    return res.data;
};

export const getCategories = async () => {
    const res = await apiInstanceAuth.get('/course/categories')
    return res.data;
}

export const createCourse = async (data) => {
    const res = await apiInstanceAuth.post('/course', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
    });
    return res.data;
}

export const getCourseDetail = async (id) => {
    const res = await apiInstanceAuth.get(`/course/${id}`);
    return res.data;
}

export const updateCourse = async (data, id) => {
    const res = await apiInstanceAuth.put(`/course/${id}`, data, {
        headers: { 'Content-Type': 'multipart/form-data' }
    });
    return res.data;
}

export const deleteCourse = async (id) => {
    const res = await apiInstanceAuth.delete(`/course/${id}`);
    return res.data;
}