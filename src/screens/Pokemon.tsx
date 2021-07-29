/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text, Image, ActivityIndicator } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'

import { RootStackParams } from '../navigator/TabListado'
import { usePokemon } from '../hooks/usePokemon'
import { FadeInImage } from '../components/FadeInImage'
import { PokemonDetails } from '../components/PokemonDetails'

interface Props extends StackScreenProps<RootStackParams, 'Pokemon'>{}

export const Pokemon = ({ navigation, route }: Props) => {
  const { simplePokemon: { id, name, picture }, color } = route.params
  const { top } = useSafeAreaInsets()
  const { isLoading, pokemon } = usePokemon(id)

  return (
    <View style={{ flex: 1 }}>
      {/* Header Container */}
      <View style={{ ...styles.headerContainer, backgroundColor: color }}>

        {/* BackButton */}
        <TouchableOpacity
          onPress={() => navigation.pop()}
          activeOpacity={0.8}
          style={{ ...styles.backButton, top: top + 8 }}
        >
          <Icon name='arrow-back-outline' size={35} color='white' />
        </TouchableOpacity>

        {/* Pokemon Info */}
        <Text style={{ ...styles.pokemonName, top: top + 40 }}>
          {name + '\n'} #{id}
        </Text>

        {/* Pokebola blanca */}
        <Image
          source={require('../assets/pokebola-blanca.png')}
          style={styles.pokeball}
        />

        <FadeInImage
          uri={picture}
          style={styles.pokemonPicture}
        />

      </View>

      {/* Detalles y Loading */}
      {isLoading
        ? (
          <View style={styles.loadingIndicator}>
            <ActivityIndicator
              color={color}
              size={50}
            />
          </View>
        )
        : <PokemonDetails pokemon={pokemon} />}

    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    borderBottomLeftRadius: 1000,
    borderBottomRightRadius: 1000,
    height: 370,
    zIndex: 999
  },
  backButton: {
    position: 'absolute',
    left: 20
  },
  pokemonName: {
    alignSelf: 'flex-start',
    color: 'white',
    fontSize: 40,
    left: 20
  },
  pokeball: {
    width: 250,
    height: 250,
    bottom: -10,
    opacity: 0.7
  },
  pokemonPicture: {
    width: 250,
    height: 250,
    position: 'absolute',
    bottom: -12
  },
  loadingIndicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
