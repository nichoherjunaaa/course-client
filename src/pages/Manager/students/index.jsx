import React from 'react';
import { Link } from 'react-router-dom';
import StudentCard from './student-card';

const ManageStudentsPage = () => {
    return (
        <>
            <header className="flex items-center justify-between gap-[30px]">
                <div>
                    <h1 className="font-extrabold text-[28px] leading-[42px]">Manage Students</h1>
                    <p className="text-[#838C9D] mt-[1]">Keep your employee or student happy</p>
                </div>
                <div className="flex items-center gap-3">
                    <Link to="#" className="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap">
                        Import File
                    </Link>
                    <Link to="create-new-student.html" className="w-fit rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap">
                        Add Student
                    </Link>
                </div>
            </header>
            <section id="CourseList" className="flex flex-col w-full rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]">
            <StudentCard/>
                {/* <div id="Pagination" className="flex items-center gap-3">
                    {[1, 2, 3, 4, 5].map((page) => (
                        <button
                            key={page}
                            type="button"
                            className={`flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 ${page === 1 ? 'bg-[#662FFF] text-white' : 'border border-[#060A23]'
                                } hover:bg-[#662FFF] hover:text-white`}
                        >
                            <span className="font-semibold text-sm leading-[21px]">{page}</span>
                        </button>
                    ))}
                </div> */}
            </section>
        </>
    );
};

export default ManageStudentsPage;