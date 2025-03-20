import { createBrowserRouter } from 'react-router-dom'
import ManagerHome from '../pages/Manager/Home'
import SignInPage from '../pages/SignIn'
import SignUpPage from '../pages/SignUp'
import SuccessCheckout from '../pages/SuccessCheckout'
import Layout from '../components/layout'
import ManageCourse from '../pages/Manager/Courses'
import CreateCoursePage from '../pages/Manager/CreateCourse'
import DetailCoursePage from '../pages/Manager/CourseDetail'

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
            }
        ]
    }
])

export default router