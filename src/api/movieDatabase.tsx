import axios from 'axios'

const movieDatabase = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '613e1ea120da15bbdbbcd572f96dd4aa',
    language: 'es-ES'
  }
})

export default movieDatabase