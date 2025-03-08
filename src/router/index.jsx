import { createBrowserRouter } from 'react-router-dom'
import ManagerHome from '../pages/ManagerHome'
import SignInPage from '../pages/SignIn'
import SignUpPage from '../pages/SignUp'
import SuccessCheckout from '../pages/SuccessCheckout'
import Layout from '../components/layout'

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
                
            }
        ]
    }
])

export default router