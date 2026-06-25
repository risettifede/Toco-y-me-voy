import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PlayerPage from './pages/PlayerPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jugador/:nombre" element={<PlayerPage />} />
      </Routes>
    </BrowserRouter>
  )
}
