import { useEffect, useState } from 'react'
import movieDatabase from '../api/movieDatabase'
import { Movie, MoviesResponse } from '../interfaces/movieInterface'

interface MoviesState {
  nowPlaying: Movie[]
  popularFilms: Movie[]
  topRatedFilms: Movie[]
  upcomingFilms: Movie[]
}

const useMovies = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [moviesState, setMoviesState] = useState<MoviesState>()

  const getMovies = async () => {
    const nowPlayingPromise = movieDatabase.get<MoviesResponse>('/now_playing')
    const popularFilmsPromise = movieDatabase.get<MoviesResponse>('/popular')
    const topRatedFilmsPromise = movieDatabase.get<MoviesResponse>('/top_rated')
    const upcomingFilmsPromise = movieDatabase.get<MoviesResponse>('/upcoming')

    const response = await Promise.all([
      nowPlayingPromise,
      popularFilmsPromise,
      topRatedFilmsPromise,
      upcomingFilmsPromise
    ])

    setMoviesState({
      nowPlaying: response[0].data.results,
      popularFilms: response[1].data.results,
      topRatedFilms: response[2].data.results,
      upcomingFilms: response[3].data.results,
    })

    setIsLoading(false)
  }

  useEffect(() => {
    getMovies()
  }, [])

  return {
    ...moviesState,
    isLoading
  }
}

export default useMovies