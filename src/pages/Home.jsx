import React from 'react'
import {useState} from 'react'
import MovieCard from '../components/MovieCard'
const Home = () => {

    const [searchQuery, setSearchQuery] = useState("")

    const movies = [
        { id: 1, title: "The Shawshank Redemption", release_date: "2023" },
        { id: 2, title: "The Godfather", release_date: "2023" },
        { id: 3, title: "The Dark Knight", release_date: "2023" }
    ]

    const handleSearch = (e) => {
        e.preventDefault()
        alert(`Searching for: ${searchQuery}`)
      }

  return (
    <div className='home'>
      <form className="search-form" onSubmit={handleSearch}>
        <input type="text" 
          placeholder='Search for movies...' 
          className='search-input' 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          />
        <button type='submit' className="search-button">Search</button>
      </form>

        <div className="movie-grid">
            {movies.map((movie) => (<MovieCard movie={movie} key={movie.id}/>) )}
        </div>
    </div>
  )
}

export default Home