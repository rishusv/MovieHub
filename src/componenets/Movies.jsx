import React, { use } from 'react'
import { useState } from 'react'
import Pagination from './Pagination'
import MovieCard from './MovieCard';

function Movies() {
    const [movies, setMovies] = useState([
        {
            title: "Movie 1",
            url: "https://images.pexels.com/photos/2672097/pexels-photo-2672097.jpeg",
        },
        {
            title: "Movie 2",
            url: "https://images.pexels.com/photos/2672097/pexels-photo-2672097.jpeg",
        },
        {
            title: "Movie 3",
            url: "https://images.pexels.com/photos/2672097/pexels-photo-2672097.jpeg",
        },
        {
            title: "Movie 4",
            url: "https://images.pexels.com/photos/2672097/pexels-photo-2672097.jpeg",
        },
        {
            title: "Movie 5",
            url: "https://images.pexels.com/photos/2672097/pexels-photo-2672097.jpeg",
        },
        {
            title: "Movie 6",
            url: "https://images.pexels.com/photos/2672097/pexels-photo-2672097.jpeg",
        },
        {
            title: "Movie 7",
            url: "https://images.pexels.com/photos/2672097/pexels-photo-2672097.jpeg",
        },
        {
            title: "Movie 8",
            url: "https://images.pexels.com/photos/2672097/pexels-photo-2672097.jpeg",
        },
        {
            title: "Movie 9",
            url: "https://images.pexels.com/photos/2672097/pexels-photo-2672097.jpeg",
        },
        {
            title: "Movie 10",
            url: "https://images.pexels.com/photos/2672097/pexels-photo-2672097.jpeg",
        },
        {
            title: "Movie 11",
            url: "https://images.pexels.com/photos/2672097/pexels-photo-2672097.jpeg",
        },
        {
            title: "Movie 12",
            url: "https://images.pexels.com/photos/2672097/pexels-photo-2672097.jpeg",
        },
    ]);

    const [pageNo, setPageNo] = useState(1);

    const handleNext = () => {
        setPageNo(pageNo + 1);
    }

    const handlePrev = () => {
        if (pageNo == 1) {
            setPageNo(1);
        }
        else {
            setPageNo(pageNo - 1);
        }
    }

    return (
        <div>
            <div className='text-2xl font-bold text-center m-5'>
                <h1>Trending Movies</h1>
            </div>
            <div className='flex flex-wrap justify-evenly gap-20'>
                {movies.map((moviesObj) => {
                        return (
                            <MovieCard key={moviesObj.title} moviesObj={moviesObj} />
                        )
                    })
                }
            </div>

            <Pagination 
            nextPageFn={handleNext} 
            prevPageFn={handlePrev} 
            pageNo={pageNo} />
        </div>
    )
}

export default Movies
