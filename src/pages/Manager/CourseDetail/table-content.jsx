import React from 'react'
import CardContent from './card-content'

const TableContent = () => {
    return (
        <>
            <section id="CourseList" className="flex flex-col w-full rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]">
                <div className="header flex items-center justify-between">
                    <h2 className="font-bold text-[22px] leading-[33px]">Course Content</h2>
                    <a href="add-course-content.html" className="w-fit rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap">
                        Add Content
                    </a>
                </div>
                {/* Course Content Cards */}
                <CardContent type="text"/>
                <CardContent type="video"/>
                <div id="Pagination" className="flex items-center gap-3">
                    {[...Array(5)].map((_, index) => (
                        <button type="button" className={`flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 ${index === 0 ? 'bg-[#662FFF] text-white' : 'border border-[#060A23]'}`} key={index}>
                            <span className="font-semibold text-sm leading-[21px]">{index + 1}</span>
                        </button>
                    ))}
                </div>
            </section>
        </>
    )
}

export default TableContent
