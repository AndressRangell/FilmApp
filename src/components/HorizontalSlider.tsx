import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Movie } from '../interfaces/movieInterface'
import styles from './horizontalslider.style'
import MoviePoster from './MoviePoster'

interface Props {
  title?: string,
  movies: Movie[]
}

const HorizontalSlider = ({ title, movies }: Props) => {
  return (
    <View style={styles.films}>
      <Text style={styles.titleFilms}>{title}</Text>
      <FlatList
        data={movies}
        renderItem={({ item }: any) => (
          <MoviePoster
            movie={item}
            width={140}
            height={200}
            marginHorizontal={8}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default HorizontalSlider