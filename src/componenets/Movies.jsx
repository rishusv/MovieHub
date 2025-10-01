import React, { useState,useEffect, useContext } from 'react'
import Pagination from './Pagination'
import MovieCard from './MovieCard';
import axios from 'axios';
import {WatchListContext} from '../context/WatchListContext'

function Movies() {
    const [movies, setMovies] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const data = useContext(WatchListContext);
    const {addToWatchlist, removeFromWatchlist, watchlist} = data;

    

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
                            <MovieCard key={moviesObj.id} moviesObj={moviesObj} addToWatchlist={addToWatchlist} 
                            watchlist={watchlist} 
                            removeFromWatchlist={removeFromWatchlist} />
                        )
                    })
                }                npm run dev
            </div>

            <Pagination 
            nextPageFn={handleNext} 
            prevPageFn={handlePrev} 
            pageNo={pageNo} />
        </div>
    )
}

export default Movies
