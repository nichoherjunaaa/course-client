import React from 'react'
import CardContent from './card-content'
import { Link } from 'react-router-dom'
import Proptypes from 'prop-types';
const TableContent = ({details, courseId}) => {
    console.log(details);
    
    return (
        <>
            <section id="CourseList" className="flex flex-col w-full rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]">
                <div className="header flex items-center justify-between">
                    <h2 className="font-bold text-[22px] leading-[33px]">Course Content</h2>
                    <Link to={`/manager/courses/${courseId}/create`} className="w-fit rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap">
                        Add Content
                    </Link>
                </div>
                {details.map((content, i) => (
                    <CardContent key={content._id} type={content.type} title={content.title} id={content._id} courseIdd={courseId} index={i+1}/>
                ))}
            </section>
        </>
    )
}

TableContent.propTypes = {
    details : Proptypes.array,
    courseId : Proptypes.string
}

export default TableContent
