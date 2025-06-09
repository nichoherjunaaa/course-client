import React from 'react';
import Sidebar from './sidebar';
import Header from './header';
import Courses from '../pages/manage/home/courses';
import Students from '../pages/manage/home/students';
import { Outlet, useMatch } from 'react-router-dom';
import ManagePreviewPage from '../pages/manage/course-preview';
const Layout = ({ isAdmin = true }) => {
    const isManagerPreviewPage = useMatch('manager/courses/:id/preview');
    const isStudentsPreviewPage = useMatch('students/detail-course/:id')
    
    return (

        <>
            {isManagerPreviewPage !== null || isStudentsPreviewPage !== null ? (
                <Outlet />
            ) : (
                <div className="flex min-h-screen">
                    <Sidebar isAdmin={isAdmin} />
                    <main className="flex flex-col flex-1 gap-[30px] p-[30px] ml-[290px]">
                        <Header />
                        <Outlet />
                    </main>
                </div>
            )}
        </>
    );
}

export default Layout;