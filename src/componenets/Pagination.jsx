import React from 'react'

function Pagination({nextPageFn, prevPageFn, pageNo}) {
    return (
        <div className='bg-gray-400 p-4 h-[50px] w-full mt-8 flex justify-center items-center gap-4'>
            <div onClick={prevPageFn} className='px-8 hover:cursor-pointer'><i className="fa-solid fa-arrow-left"></i></div>

            <div>{pageNo}</div>
            
            <div onClick={nextPageFn} className='px-8 hover:cursor-pointer'><i className="fa-solid fa-arrow-right"></i></div>
        </div>
    )
}

export default Pagination
