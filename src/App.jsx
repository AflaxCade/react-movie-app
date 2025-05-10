import { MovieProvider } from "./context/MovieContext";
import { Routes, Route } from "react-router";
import NavBar from "./components/NavBar";
import Favorites from "./pages/Favorites";
import Home from './pages/Home'
import './css/App.css'

function App() {

  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
      </MovieProvider>

  )
}

export default App
