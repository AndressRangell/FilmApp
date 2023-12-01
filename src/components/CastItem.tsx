import { View, Text, Image } from 'react-native'
import React from 'react'
import { Cast } from '../interfaces/creditsInterface'
import styles from './castitem.style'

interface Props {
  actor: Cast
}

const CastItem = ({ actor }: Props) => {

  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`

  return (
    <View style={styles.container}>
      {
        actor.profile_path && (
          <Image
            source={{ uri }}
            style={styles.imageActor}
          />
        )
      }
      <View>
        <Text style={styles.name}>
          {actor.name}
        </Text>
        <Text style={styles.character}>
          {actor.character}
        </Text>
      </View>
    </View>
  )
}

export default CastItem