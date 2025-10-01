import { useState } from 'react'
import './App.css'
import NavBar from './componenets/NavBar'
import Home from './componenets/Home'
import WatchList from './componenets/WatchList'
import { Routes, Route } from 'react-router-dom'
import WatchListContextProvider from './context/WatchListContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <WatchListContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/watchlist' element={<WatchList />} />
        </Routes>
      </WatchListContextProvider>
    </>
  )
}

export default App
