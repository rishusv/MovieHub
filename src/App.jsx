import { useState } from 'react'
import './App.css'
import NavBar from './componenets/NavBar'
import Home from './componenets/Home'
import WatchList from './componenets/WatchList'
import {Routes, Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/watchlist' element={<WatchList/>}/>
      </Routes>
    </>
  )
}

export default App
