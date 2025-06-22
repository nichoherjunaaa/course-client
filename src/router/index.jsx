import { createBrowserRouter } from 'react-router-dom'
import ManagerHome from '../pages/manage/home'
import SignInPage from '../pages/sign-in'
import SignUpPage from '../pages/sign-up'
import SuccessCheckout from '../pages/success-checkout'
import Layout from '../components/layout'
import ManageCourse from '../pages/manage/courses'
import CreateCoursePage from '../pages/manage/create-course'
import DetailCoursePage from '../pages/manage/course-detail'
import CourseContentCreate from '../pages/manage/course-content-create'
import ManagePreviewPage from '../pages/manage/course-preview'
import ManageStudentsPage from '../pages/manage/students'
import StudentPage from '../pages/students/students-overview'
import secureLocalStorage from 'react-secure-storage';
import { MANAGER_SESSION, STORAGE_KEY } from './../utils/const';
import { redirect } from 'react-router-dom';
import { getCategories, getCourse, getCourseDetail } from '../service/courseService'
import { isTokenExpired } from '../utils/isToken'

const router = createBrowserRouter([
    {
        path: '/',
        element: <ManagerHome />
    },
    {
        path: '/manager/sign-in',
        element: <SignInPage />
    },
    {
        path: '/manager/sign-up',
        element: <SignUpPage />
    },
    {
        path: '/success-checkout',
        element: <SuccessCheckout />
    }, {
        path: 'manager',
        id: MANAGER_SESSION,
        loader: () => {
            const session = secureLocalStorage.getItem(STORAGE_KEY);
            // console.log('Session:', session);

            if (!session || session.role !== 'manager' || isTokenExpired(session.token)) {
                secureLocalStorage.removeItem(STORAGE_KEY);
                throw redirect('/manager/sign-in');
            }
            return session;
        },
        element: <Layout />,
        children: [
            {
                index: true,
                element: <ManagerHome />
            },
            {
                path: 'courses',
                loader: async () => {
                    const data = await getCourse();
                    // console.log(data);
                    return data
                },
                element: <ManageCourse />
            },
            {
                path: 'courses/create',
                loader: async () => {
                    const categories = await getCategories();
                    return { categories, course: null };
                },
                element: <CreateCoursePage />,
            },
            {
                path: 'courses/edit/:id',
                element: <CreateCoursePage />,
                loader: async ({ params }) => {
                    const categories = await getCategories();
                    const course = await getCourseDetail(params.id);
                    return { categories, course: course.data };

                }
            },
            {
                path: 'courses/:id',
                element: <DetailCoursePage />,
                loader: async ({ params }) => {
                    const course = await getCourseDetail(params.id);
                    return course?.data
                }
            },
            {
                path: 'courses/:id/create',
                element: <CourseContentCreate />
            },
            {
                path: 'courses/:id/preview',
                element: <ManagePreviewPage />
            },
            {
                path: 'students',
                element: <ManageStudentsPage />
            }
        ]
    },
    {
        path: "students",
        element: <Layout isAdmin={false} />,
        children: [
            {
                index: true,
                element: <StudentPage />
            },
            {
                path: "detail-course/:id",
                element: <ManagePreviewPage />
            }
        ]
    }
])

export default router