import React from 'react';
import Sidebar from './sidebar';
import Header from './header';
import Courses from '../pages/Manager/Home/courses';
import Students from '../pages/Manager/Home/students';
import { Outlet, useMatch } from 'react-router-dom';
import ManagePreviewPage from '../pages/Manager/CoursePreview';
const Layout = ({isAdmin = true}) => {
    const isPreviewPage = useMatch('manager/courses/:id/preview');
    console.log(isPreviewPage);

    return (
        <>
            {isPreviewPage !== null ? (
                <Outlet />
            ) : (
                <div className="flex min-h-screen">
                    <Sidebar isAdmin={isAdmin}/>
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