/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import { Image, FlatList, ActivityIndicator } from 'react-native'
// import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { usePokemonPaginated } from '../hooks/usePokemonPaginated'
import { styles } from '../theme/appTheme'

export const Home = () => {
  // const { top } = useSafeAreaInsets()
  const { simplePokemonList, loadPokemons } = usePokemonPaginated()

  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaBG}
      />

      <FlatList
        data={simplePokemonList}
        showsVerticalScrollIndicator={false}
        keyExtractor={(pokemon) => pokemon.id}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.picture }}
            style={{
              width: 100,
              height: 100
            }}
          />
        )}
        onEndReached={loadPokemons} // ->infinite scroll
        onEndReachedThreshold={0.4} // ->infinite scroll
        ListFooterComponent={(
          <ActivityIndicator // ->loading
            style={{ height: 100 }}
            size={20}
            color='grey'
          />
        )}
      />

      {/* <Text style={{
        ...styles.title,
        ...styles.globalMargin,
        top: top + 20
      }}
      >Pokedex
      </Text> */}
    </>
  )
}
