import React from 'react'
import Proptypes from 'prop-types';
import { Link, useParams, useRevalidator } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { deleteCourse } from '../../../service/courseService';

const CardCourse = ({
    id = 1,
    imageUrl = "/assets/images/thumbnails/th-1.png",
    name = "Responsive Design Triclorem Lorem, ipsum dolor.",
    totalStudents = 554,
    category = "Programming"
}) => {

    const revalidator = useRevalidator();

    const { isLoading, mutateAsync } = useMutation({
        mutationFn: () => deleteCourse(id)
    })

    const handleDelete = async () => {
        try {
            await mutateAsync();
            revalidator.revalidate();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div key={id} className="card flex items-center gap-5">
            <div className="flex shrink-0 w-[140px] h-[110px] rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                <img src={imageUrl} className="w-full h-full object-cover" alt="thumbnail" />
            </div>
            <div className="w-full">
                <h3 className="font-bold text-xl leading-[30px] line-clamp-1">{name}</h3>
                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-2 mt-1">
                        <img src="/assets/images/icons/profile-2user-purple.svg" className="w-5 h-5" alt="icon" />
                        <p className="text-[#838C9D]">{totalStudents}</p>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                        <img src="/assets/images/icons/crown-purple.svg" className="w-5 h-5" alt="icon" />
                        <p className="text-[#838C9D]">{category}</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-end items-center gap-3">
                <button onClick={handleDelete} disabled={isLoading} type="button" className="w-fit rounded-full bg-red-500 text-white px-5 py-3 font-semibold text-nowrap">
                    Delete
                </button>
                <Link to={`/manager/courses/${id}`} className="w-fit rounded-full border border-[#060A23] px-5 py-3 font-semibold text-nowrap">
                    Manage
                </Link>
            </div>
        </div>
    )
}

CardCourse.propTypes = {
    id: Proptypes.number,
    imageUrl: Proptypes.string,
    name: Proptypes.string,
    totalStudents: Proptypes.string,
    category: Proptypes.string
}


export default CardCourse
