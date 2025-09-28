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
        <div className='h-[40vh] w-[250px] bg-cover bg-center rounded-xl hover:scale-110 transition-transform duration-300 flex flex-col' style={{ backgroundImage: `url(${moviesObj.image.original})` }}>

            <div className='flex justify-end bg-blue-800/5 rounded-xl p-2'>
                {doesExistInWatchlist(moviesObj) ?
                    <i className="fa-solid fa-xmark" onClick={() => removeFromWatchlist(moviesObj)}></i> :
                    <i className="fa-solid fa-cart-plus" onClick={() =>
                        addToWatchlist(moviesObj)}></i>}
            </div>

            <div className='text-white w-full text-center text-2xl p-2 font-bold bg-gray-800/50 rounded-xl mt-auto'>
                {moviesObj.name}
            </div>

        </div>
    )
}

export default MovieCard
