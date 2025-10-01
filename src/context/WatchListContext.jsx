import { createContext,useState,useEffect } from "react";

const WatchListContext = createContext();

export default function WatchListContextProvider({children}){
    const [watchlist, setWatchlist] = useState([]);
    useEffect(() => {
        const storedWatchlist = localStorage.getItem("movies");
        if (storedWatchlist) {
            setWatchlist(JSON.parse(storedWatchlist));
        }
    }, []);

    const addToWatchlist = (movie) => {
        const updatedList = [...watchlist, movie]; //watchList.concat(movie);
        setWatchlist(updatedList);
        localStorage.setItem("movies", JSON.stringify(updatedList));
    }

    const removeFromWatchlist = (movie) => {
        const updatedList = watchlist.filter(item => item.id !== movie.id);
        setWatchlist(updatedList);
        localStorage.setItem("movies", JSON.stringify(updatedList));
    }

    console.log("Watchlist:", watchlist);
    return (
        <WatchListContext.Provider value={{watchlist, addToWatchlist, removeFromWatchlist,setWatchlist}}>
            {children}
        </WatchListContext.Provider>
    )
}

export {WatchListContext};