import React from 'react'

function MovieCard({ moviesObj, addToWatchlist, watchlist, removeFromWatchlist }) {

    const doesExistInWatchlist = (moviesObj) => {
        for (let i = 0; i < watchlist.length; i++) {
            if (watchlist[i].id === moviesObj.id) {
                return true;
            }
        }
        return false;
    }
    return (
        <div className='h-[40vh] w-[250px] bg-cover bg-center rounded-xl hover:scale-110 transition-transform duration-300 flex flex-col justify-between' style={{ backgroundImage: `url(${moviesObj.image.original})` }}>

            <div className='flex justify-end'>
                {doesExistInWatchlist(moviesObj) ?
                    <i className="fa-solid bg-gray-800 rounded-xl m-2 fa-xmark p-2 text-white mix-blend-difference cursor-pointer" onClick={() => removeFromWatchlist(moviesObj)}></i> :
                    <i className="fa-solid bg-gray-800 rounded-xl m-2 fa-cart-plus p-2 text-white mix-blend-difference cursor-pointer" onClick={() =>
                        addToWatchlist(moviesObj)}></i>}
            </div>

            <div className='text-white w-full text-center text-xl p-1 font-bold bg-gray-800/50 rounded-xl mt-auto'>
                {moviesObj.name}
            </div>

        </div>
    )
}

export default MovieCard
