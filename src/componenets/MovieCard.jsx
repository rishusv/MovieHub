import React from 'react'

function MovieCard({moviesObj}) {
    return (
        <div className='h-[40vh] w-[200px] bg-cover bg-center rounded-xl hover:scale-110 transition-transform duration-300 flex flex-col' style={{ backgroundImage: `url(${moviesObj.url})` }}>

            <div className='text-white w-full text-center text-2xl p-2 font-bold bg-gray-800 rounded-xl'>
                {moviesObj.title}
            </div>

        </div>
    )
}

export default MovieCard
