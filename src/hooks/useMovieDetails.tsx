import { useEffect, useState } from 'react'
import movieDatabase from '../api/movieDatabase'
import { MovieFull } from '../interfaces/movieInterface'
import { Cast, CreditsResponse } from '../interfaces/creditsInterface'

interface MovieDetails {
  isLoading: boolean
  movieFull?: MovieFull
  cast: Cast[]
}

const useMovieDetails = (movieId: number) => {

  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: []
  })
  const getMovieDetails = async () => {
    const movieDetailsPromise = movieDatabase.get<MovieFull>(`/${movieId}`)
    const creditsPromise = movieDatabase.get<CreditsResponse>(`/${movieId}/credits`)

    const [movieDetailsResp, creditsResp] = await Promise.all([movieDetailsPromise, creditsPromise])
    setState({
      isLoading: false,
      movieFull: movieDetailsResp.data,
      cast: creditsResp.data.cast
    })
  }

  useEffect(() => {
    getMovieDetails()
  }, [])

  return {
    ...state
  }
}

export default useMovieDetails