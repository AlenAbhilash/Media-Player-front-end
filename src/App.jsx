import './App.css'
import Footerspage from './components/Footer'
import Headers from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Landging from './pages/Landging'
import Home from './pages/Home'
import WatchHistory from './pages/WatchHistory'

function App() {
  return (
    <>
      <Headers />
      <Routes>
        <Route path='/' element={<Landging />} />
        <Route path='/home' element={<Home />} />
        <Route path='/WatchHistory' element={<WatchHistory />} />
      </Routes>
      <Footerspage />
    </>
  )
}

export default App
