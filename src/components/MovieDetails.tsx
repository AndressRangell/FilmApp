import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './moviedetails.style'
import currencyFormatter from 'currency-formatter'
import CastItem from './CastItem'
import { MovieFull } from '../interfaces/movieInterface'
import { Cast } from '../interfaces/creditsInterface'

interface Props {
  movieFull: MovieFull
  cast: Cast[]
}

const MovieDetails = ({ movieFull, cast }: Props) => {
  return (
    <View>
      <View style={styles.container}>
        <Ionicons name='star' color='gray' size={18} />
        <Text style={styles.rowDetails}>
          {movieFull.vote_average.toFixed(1)}
        </Text>
        <Text style={styles.rowDetails}>
          -  {movieFull.genres.map(genre => genre.name).join(', ')}
        </Text>
      </View>

      <View>
        <Text style={styles.historyTitle}>
          Historia
        </Text>
        <Text style={styles.overview}>
          {movieFull.overview}
        </Text>

        <Text style={styles.budgetTitle}>
          Presupuesto
        </Text>
        <Text style={styles.budget}>
          {currencyFormatter.format(movieFull.budget, { code: 'USD' })}
        </Text>
      </View>

      <View style={styles.castContainer}>
        <Text style={styles.castTitle}>
          Actores
        </Text>
        <FlatList
          data={cast}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <CastItem actor={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.actorList}
        />
      </View>
    </View>
  )
}

export default MovieDetails