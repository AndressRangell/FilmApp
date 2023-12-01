import { View, ActivityIndicator, Dimensions, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import useMovies from '../hooks/useMovies'
import styles from './home.style'
import MoviePoster from '../components/MoviePoster'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Carousel from 'react-native-snap-carousel'
import HorizontalSlider from '../components/HorizontalSlider'

const { width: windowWidth } = Dimensions.get('window')

const HomeScreen = () => {

  const { nowPlaying, popularFilms, topRatedFilms, upcomingFilms, isLoading } = useMovies()
  const { top } = useSafeAreaInsets()

  return (
    <ScrollView>
      <View style={{ ...styles.container, marginTop: top + 20 }}>
        <View style={styles.carousel}>
          <Carousel
            data={nowPlaying}
            renderItem={({ item }: any) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
          />
        </View>

        <HorizontalSlider title='Populares' movies={popularFilms} />
        <HorizontalSlider title='Mejor valoradas' movies={topRatedFilms} />
        <HorizontalSlider title='Próximos estrenos' movies={upcomingFilms} />
      </View>
    </ScrollView>
  )
}

export default HomeScreen