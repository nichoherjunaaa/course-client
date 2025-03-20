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
        element: <Layout />,
        children: [
            {
                index : true,
                element: <ManagerHome />
            },
            {
                path: 'courses',
                element: <ManageCourse/>
            },
            {
                path : 'courses/create',
                element : <CreateCoursePage/>
            },
            {
                path : 'courses/:id',
                element : <DetailCoursePage/>
            },
            {
                path: 'courses/:id/create', // Fixed the missing closing quote here
                element: <CourseContentCreate />
            },
            {
                path : 'courses/:id/preview',
                element : <ManagePreviewPage/>
            },
            {
                path : 'students',
                element : <ManageStudentsPage/>
            }
        ]
    },
    {
        path : "students",
        element : <Layout isAdmin={false} />,
        children : [
            {
                index : true,
                element : <StudentPage/>
            },
            {
                path : "detail-course/:id",
                element : <ManagePreviewPage/>
            }
        ]
    }
])

export default router