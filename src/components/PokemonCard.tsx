/* eslint-disable @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-floating-promises, */
import React, { useEffect, useRef, useState } from 'react'
import { Dimensions, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import ImageColors from 'react-native-image-colors'

import { FadeInImage } from './FadeInImage'
import { SimplePokemon } from '../interfaces/pokemon'
import { useNavigation } from '@react-navigation/native'

const windowWidth = Dimensions.get('window').width
interface Props { pokemon: SimplePokemon }

export const PokemonCard = ({ pokemon }: Props) => {
  const [bgColor, setBgColor] = useState('grey')
  const isMounted = useRef(true)
  const navigation = useNavigation()

  useEffect(() => {
    ImageColors.getColors(pokemon.picture, { fallback: 'grey' })
      .then(colors => {
        if (!isMounted.current) return

        (colors.platform === 'android')
          ? setBgColor(colors.dominant || 'grey') // eslint-disable-line
          : setBgColor(colors.background || 'grey') // eslint-disable-line
      })

    return () => { isMounted.current = false }
  }, [])

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={
        () => navigation.navigate('Pokemon', {
          simplePokemon: pokemon,
          color: bgColor
        }
        )
      }
    >
      <View style={{
        ...styles.cardContainer,
        width: windowWidth * 0.4,
        backgroundColor: bgColor
      }}
      >
        <View>
          <Text style={styles.name}>
            {pokemon.name}
            {'\n#' + pokemon.id}
          </Text>
        </View>

        <View style={styles.pokebolaContainer}>
          <Image
            source={require('../assets/pokebola-blanca.png')}
            style={styles.pokebolaImage}
          />
        </View>

        <FadeInImage
          uri={pokemon.picture}
          style={styles.pokemon}
        />

      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    height: 120,
    width: 160,
    marginBottom: 25,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    left: 10,
    top: 20
  },
  pokebolaContainer: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 0,
    right: 0,
    overflow: 'hidden',
    opacity: 0.5
  },
  pokebolaImage: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: -25,
    right: -25
  },
  pokemon: {
    height: 120,
    width: 120,
    position: 'absolute',
    right: -8,
    bottom: -5
  }
})
