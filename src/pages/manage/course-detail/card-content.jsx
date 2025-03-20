import React from 'react'
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
const CardContent = ({
    index = 1, 
    id = 1, 
    type = "Video", 
    title = "Install VSCode di Windows",
    courseId = 2,
}) => {
    return (
        <>
            <div className="card flex items-center gap-5" key={index}>
                <div className="relative flex shrink-0 w-[140px] h-[110px]">
                    <p className="absolute -top-[10px] -left-[10px] flex shrink-0 w-[30px] h-[30px] rounded-full items-center justify-center text-center bg-[#662FFF] text-white">
                        <span className="font-bold text-sm leading-[21px]">{index + 1}</span>
                    </p>
                    <div className="rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                        <img src={`/assets/images/thumbnails/cover-${type}.png`} className="w-full h-full object-cover" alt="thumbnail" />
                    </div>
                </div>
                <div className="w-full">
                    <h3 className="font-bold text-xl leading-[30px] line-clamp-1">{title}</h3>
                    <div className="flex items-center gap-5">
                        <div className="flex items-center gap-[6px] mt-[6px]">
                            <img src="/assets/images/icons/note-favorite-purple.svg" className="w-5 h-5" alt="icon" />
                            <p className="text-[#838C9D]">Video Content</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end items-center gap-3">
                    <Link to={`/manager/courses/${id}/edit/${id}`} className="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap">
                        Edit Content
                    </Link>
                    <button type="button" className="w-fit rounded-full p-[14px_20px] bg-[#FF435A] font-semibold text-white text-nowrap">Delete</button>
                </div>
            </div>
        </>
    )
}

CardContent.propTypes = {
    index : Proptypes.number,
    id : Proptypes.number,
    type : Proptypes.string,
    title : Proptypes.string,
    courseId : Proptypes.number
}

export default CardContent
