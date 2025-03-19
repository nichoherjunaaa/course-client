import React from "react";
import CardCourse from "./card";
const ManageCourse = () => {
    const courses = [
        {
            id: 1,
            title: "Responsive Design Triclorem Lorem, ipsum dolor.",
            students: "554 Students",
            category: "Programming",
            image: "/assets/images/thumbnails/th-1.png",
        },
        {
            id: 2,
            title: "HTMX JavaScript 2020",
            students: "2,887 Students",
            category: "Marketing",
            image: "/assets/images/thumbnails/th-2.png",
        },
        {
            id: 3,
            title: "Mastering React",
            students: "3,578 Students",
            category: "Daily Work",
            image: "/assets/images/thumbnails/th-3.png",
        },
        {
            id: 4,
            title: "Company Profile Multilorem Lorem, ipsum dolor.",
            students: "2,887 Students",
            category: "Marketing",
            image: "/assets/images/thumbnails/th-3.png",
        },
    ];

    return (
        <>
            <header className="flex items-center justify-between gap-8">
                <div>
                    <h1 className="font-extrabold text-[28px] leading-[42px]">Manage Courses</h1>
                    <p className="text-[#838C9D] mt-1">Give the best future for your great employees</p>
                </div>
                <div className="flex items-center gap-3">
                    <a href="#" className="w-fit rounded-full border border-[#060A23] px-5 py-3 font-semibold text-nowrap">
                        Import File
                    </a>
                    <a href="create-new-course.html" className="w-fit rounded-full px-5 py-3 font-semibold text-white bg-[#662FFF] text-nowrap">
                        New Course
                    </a>
                </div>
            </header>

            <section id="CourseList" className="flex flex-col w-full rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]">
            <CardCourse/>
            </section>
        </>
    );
};

export default ManageCourse;
