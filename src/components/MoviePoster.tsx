import { View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Movie } from '../interfaces/movieInterface'
import styles from './movieposter.style'
import { useNavigation } from '@react-navigation/native'
import currentFilm from '../api/currentFilm'

interface Props {
  movie: Movie,
  width?: number,
  height?: number,
  marginHorizontal?: number
}

const MoviePoster = ({ movie, width = 300, height = 430, marginHorizontal = 0 }: Props) => {

  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      onPress={() => {
        currentFilm.currentFilm.movie = movie
        navigation.navigate('DetailScreen' as never)
      }}
      activeOpacity={0.8}
      style={{
        width,
        height,
        marginHorizontal
      }}
    >
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri }}
        />
      </View>
    </TouchableOpacity>
  )
}

export default MoviePoster