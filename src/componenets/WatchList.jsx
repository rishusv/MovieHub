import React, { useState, useEffect } from 'react'

function WatchList() {

  const [watchlist, setWatchlist] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [genreList, setGenreList] = useState(["All Genres", "Action", "Comedy", "Drama"]);
  const [currentGenre, setCurrentGenre] = useState("All Genres");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleFilterByGenre = (genre) => {
    setCurrentGenre(genre);
  }

  useEffect(() => {
    const genres = new Set();
    watchlist.forEach(movie => {
      if (Array.isArray(movie.genres)) {
        movie.genres.forEach(genre => genres.add(genre));
      } else if (movie.genre) {
        genres.add(movie.genre);
      }
    });
    setGenreList(["All Genres", ...Array.from(genres)]);
  }, [watchlist]);

  useEffect(() => {
    // Movies component stores the watchlist under key "movies" in localStorage
    const storedWatchlist = JSON.parse(localStorage.getItem('movies')) || []
    setWatchlist(storedWatchlist)
  }, [])

  const handleAscendingRating = () => {
    const sortedList = [...watchlist].sort((moviesObjA, moviesObjB) => {
      const ratingA = moviesObjA.rating?.average ?? moviesObjA.vote_average ?? 0
      const ratingB = moviesObjB.rating?.average ?? moviesObjB.vote_average ?? 0
      return ratingA - ratingB
    })
    setWatchlist(sortedList)
  }

  const handleDescendingRating = () => {
    const sortedList = [...watchlist].sort((moviesObjA, moviesObjB) => {
      const ratingA = moviesObjA.rating?.average ?? moviesObjA.vote_average ?? 0
      const ratingB = moviesObjB.rating?.average ?? moviesObjB.vote_average ?? 0
      return ratingB - ratingA
    })
    setWatchlist(sortedList)
  }


  return (

    <>
    <div className="flex justify-center">

      <div className='flex justify-center m-4'>
        {genreList.map((genre) => {
          const isActive = genre === currentGenre;
          const baseStyles = "flex justify-center items-center h-[3rem] w-[8rem] px-4 py-2 m-1 rounded-full cursor-pointer hover:cursor-pointer";
          const bgColor = isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700';
          return (
            <div
            key={genre}
            onClick={() => handleFilterByGenre(genre)}
            className={`${baseStyles} ${bgColor}`}
            >
              {genre}
            </div>
          )
        })}
      </div>
      <div>
        <input type="text"
          className='border border-gray-300 rounded-md p-2 m-5'
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search..." />
      </div>
          </div>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-4 font-medium text-gray-900">Name</th>
              <th>
                <div className="flex">
                  <i className="fa-solid fa-arrow-up mx-1 mt-1 hover:cursor-pointer" onClick={handleAscendingRating}></i>
                  Ratings
                  <i className="fa-solid fa-arrow-down mx-1 mt-1 hover:cursor-pointer" onClick={handleDescendingRating}></i>
                </div>
              </th>
              <th>
                <div className="flex">
                  <div>Popularity</div>
                </div>
              </th>
              <th>
                <div className="flex">
                  <div>Genre</div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {watchlist.filter(genre => {
              if (currentGenre === "All Genres") return true;
              if (Array.isArray(genre.genres)) {
                return genre.genres.includes(currentGenre);
              } else if (genre.genre) {
                return genre.genre === currentGenre;
              }
              return false;
            })
            .filter(movie => {
              const title = movie.name || movie.title || 'Untitled'
              return title.toLowerCase().includes(searchTerm.toLowerCase())
            })
              .map((movie) => {
                const poster = movie.image?.original || movie.image?.medium || movie.poster || ''
                const title = movie.name || movie.title || 'Untitled'
                const rating = movie.rating?.average ?? movie.vote_average ?? '0'
                const popularity = movie.weight ?? movie.popularity ?? '—'
                const genres = Array.isArray(movie.genres) ? movie.genres.join(', ') : movie.genre || '—'

                return (
                  <tr className="hover:bg-gray-50" key={movie.id}>
                    <td className="flex items-center px-6 py-4 font-normal text-gray-900 gap-4">
                      <img
                        className="h-[6rem] w-[10rem] object-cover rounded-r-lg"
                        src={poster}
                        alt={title}
                      />
                      <div className="font-medium text-gray-700 text-sm">{title}</div>
                    </td>
                    <td className="pl-6 py-4">{rating}</td>
                    <td className="pl-6 py-4">{popularity}</td>
                    <td className="pl-2 py-4">{genres}</td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList
