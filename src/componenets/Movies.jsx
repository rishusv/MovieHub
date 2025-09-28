import React, { useState,useEffect } from 'react'
import Pagination from './Pagination'
import MovieCard from './MovieCard';
import axios from 'axios';

function Movies() {
    const [movies, setMovies] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [watchlist, setWatchlist] = useState([]);

    const addToWatchlist = (movie) => {
        const updatedList = [...watchlist, movie]; //watchList.concat(movie);
        setWatchlist(updatedList);
    }

    const removeFromWatchlist = (movie) => {
        const updatedList = watchlist.filter(item => item.id !== movie.id);
        setWatchlist(updatedList);
    }

    console.log("Watchlist:", watchlist);

    useEffect(() => {
        axios.get(`https://api.tvmaze.com/shows?page=${pageNo}`)
            .then(response => {
                setMovies(response.data);
            }); 
    }, [pageNo]);

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
            <div className='flex flex-wrap justify-evenly gap-10'>
                {movies.map((moviesObj) => {
                        return (
                            <MovieCard key={moviesObj.title} moviesObj={moviesObj} addToWatchlist={addToWatchlist} 
                            watchlist={watchlist} 
                            removeFromWatchlist={removeFromWatchlist} />
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
