import React from "react";
import CardCourse from "./card";
import { Link, useLoaderData } from 'react-router-dom';
const ManageCourse = () => {

    const courses = useLoaderData();
    // console.log(courses);

    return (
        <>
            <header className="flex items-center justify-between gap-8">
                <div>
                    <h1 className="font-extrabold text-[28px] leading-[42px]">Manage Courses</h1>
                    <p className="text-[#838C9D] mt-1">Give the best future for your great employees</p>
                </div>
                <div className="flex items-center gap-3">
                    <Link to="" className="w-fit rounded-full border border-[#060A23] px-5 py-3 font-semibold text-nowrap">
                        Import File
                    </Link>
                    <Link to="/manager/courses/create" className="w-fit rounded-full px-5 py-3 font-semibold text-white bg-[#662FFF] text-nowrap">
                        New Course
                    </Link>
                </div>
            </header>

            <section id="CourseList" className="flex flex-col w-full rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]">
                {courses?.data?.map((course) => <CardCourse key={course._id} category={course.category.name} id={course._id} imageUrl={course.thumbnail_url} name={course.name} totalStudents={course.total_students}/>)}
            </section>
        </>
    );
};

export default ManageCourse;
