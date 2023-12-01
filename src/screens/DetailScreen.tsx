import { View, Text, Dimensions, ScrollView, Image, ActivityIndicator } from 'react-native'
import React from 'react'
import currentFilm from '../api/currentFilm'
import styles from './detail.styles'
import useMovieDetails from '../hooks/useMovieDetails'
import MovieDetails from '../components/MovieDetails'

const screenHeight = Dimensions.get('screen').height

const DetailScreen = () => {

  const movie = currentFilm.currentFilm.movie
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  const { isLoading, cast, movieFull } = useMovieDetails(movie.id)

  return (
    <ScrollView>
      <View style={{ ...styles.imageContainer, height: screenHeight * 0.7 }}>
        <View style={styles.imageBorder}>
          <Image
            source={{ uri }}
            style={styles.posterImage}
          />
        </View>
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subTitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
        {
          isLoading ? (
            <ActivityIndicator
              color='gray'
              size={35}
              style={styles.progressIndicator}
            />
          ) : (
            <MovieDetails movieFull={movieFull} cast={cast} />
          )
        }
      </View>
    </ScrollView>
  )
}

export default DetailScreen