import { createBrowserRouter } from 'react-router-dom'
import ManagerHome from '../pages/Manager/Home'
import SignInPage from '../pages/SignIn'
import SignUpPage from '../pages/SignUp'
import SuccessCheckout from '../pages/SuccessCheckout'
import Layout from '../components/layout'
import ManageCourse from '../pages/Manager/Courses'
import CreateCoursePage from '../pages/Manager/CreateCourse'
import DetailCoursePage from '../pages/Manager/CourseDetail'
import CourseContentCreate from '../pages/Manager/course-content-create'
import ManagePreviewPage from '../pages/Manager/CoursePreview'
import ManageStudentsPage from '../pages/Manager/students'
import StudentPage from '../pages/students'

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
        path : "/students",
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