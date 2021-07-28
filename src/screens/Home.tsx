/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react'
import { Image, FlatList, ActivityIndicator, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { usePokemonPaginated } from '../hooks/usePokemonPaginated'
import { PokemonCard } from '../components/PokemonCard'
import { styles } from '../theme/appTheme'

export const Home = () => {
  const { top } = useSafeAreaInsets()
  const { simplePokemonList, loadPokemons } = usePokemonPaginated()

  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaBG}
      />

      <View style={{ alignItems: 'center' }}>
        <FlatList
          data={simplePokemonList}
          showsVerticalScrollIndicator={false}
          keyExtractor={(pokemon) => pokemon.id}
          numColumns={2}
          ListHeaderComponent={( // ->Header
            <Text style={{
              ...styles.title,
              ...styles.globalMargin,
              marginBottom: top + 20,
              paddingBottom: 10,
              top: top + 20
            }}
            >Pokedex
            </Text>
          )}
          renderItem={({ item }) => (<PokemonCard pokemon={item} />)}
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
      </View>

    </>
  )
}
