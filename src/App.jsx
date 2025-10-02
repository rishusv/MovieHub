import { useState } from 'react'
import './App.css'
import NavBar from './componenets/NavBar'
import Home from './componenets/Home'
import WatchList from './componenets/WatchList'
import { Routes, Route } from 'react-router-dom'
import WatchListContextProvider from './context/WatchListContext'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Provider store={store}>
        <NavBar />
        <WatchListContextProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/watchlist' element={<WatchList />} />
          </Routes>
        </WatchListContextProvider>
      </Provider>
    </>

  )
}

export default App
