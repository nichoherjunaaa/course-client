import React from 'react';


const CourseContentCreate = () => {
    const handleSaveAsDraft = () => {
        // Function implementation here
    };

    const handleAddContentNow = () => {
        // Function implementation here
    };

    return (
        <>
            <div id="Breadcrumb" className="flex items-center gap-5 after:content-['/'] after:ml-5">
                <span className="font-semibold">Manage Course</span>
                <span className="font-semibold">Course</span>
                <span className="font-semibold">Add Content</span>
            </div>
            <header className="flex items-center justify-between gap-[30px]">
                <div className="flex items-center gap-[30px]">
                    <div className="flex shrink-0 w-[150px] h-[100px] rounded-[20px] overflow-hidden bg-[#D9D9D9]">
                        <img src="/assets/images/thumbnails/th-1.png" className="w-full h-full object-cover" alt="thumbnail" />
                    </div>
                    <div>
                        <h1 className="font-extrabold text-[28px] leading-[42px]">Add Content</h1>
                        <p className="text-[#838C9D] mt-[1]">Give the best content for the course</p>
                    </div>
                </div>
            </header>
            <form action="manage-course-materi.html" className="flex flex-col w-[930px] rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]">
                <div className="flex flex-col gap-[10px]">
                    <label htmlFor="title" className="font-semibold">Content Title</label>
                    <div className="flex items-center w-full rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]">
                        <img src="/assets/images/icons/note-favorite-black.svg" className="w-6 h-6" alt="icon" />
                        <input type="text" name="title" id="title" className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent" placeholder="Write a better name for your course" required />
                    </div>
                </div>
                <div className="flex flex-col gap-[10px]">
                    <label htmlFor="type" className="font-semibold">Select Type</label>
                    <div className="flex items-center w-full rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]">
                        <img src="/assets/images/icons/crown-black.svg" className="w-6 h-6" alt="icon" />
                        <select name="type" id="type" className="appearance-none outline-none w-full py-3 px-2 -mx-2 font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent">
                            <option value="" hidden>Choose content type</option>
                            <option value="test1">Test 1</option>
                            <option value="test2">Test 2</option>
                            <option value="test3">Test 3</option>
                        </select>
                        <img src="/assets/images/icons/arrow-down.svg" className="w-6 h-6" alt="icon" />
                    </div>
                </div>
                <div className="flex flex-col gap-[10px]">
                    <label htmlFor="video" className="font-semibold">Youtube Video ID</label>
                    <div className="flex items-center w-full rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]">
                        <img src="/assets/images/icons/bill-black.svg" className="w-6 h-6" alt="icon" />
                        <input type="text" name="video" id="video" className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent" placeholder="Write the video ID" />
                    </div>
                </div>
                <div className="flex flex-col gap-[10px]">
                    <label className="font-semibold">Content Text</label>
                    
                </div>
                <div className="flex items-center gap-[14px]">
                    <button type="button" className="w-full rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap" onClick={handleSaveAsDraft}>
                        Save as Draft
                    </button>
                    <button type="button" className="w-full rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap" onClick={handleAddContentNow}>
                        Add Content Now
                    </button>
                </div>
            </form>
        </>
    );
}


export default CourseContentCreate;
