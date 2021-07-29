/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Dimensions, Platform } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Loading } from '../components/Loading'
import { PokemonCard } from '../components/PokemonCard'
import { SearchInput } from '../components/SearchInput'
import { usePokemonSearch } from '../hooks/usePokemonSearch'
import { SimplePokemon } from '../interfaces/pokemon'
import { styles } from '../theme/appTheme'

const screenWidth = Dimensions.get('window').width

export const Search = () => {
  const { top } = useSafeAreaInsets()
  const { isFetching, simplePokemonList } = usePokemonSearch()
  const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([])
  const [term, setTerm] = useState('')

  useEffect(() => {
    if (term.length === 0) { return setPokemonFiltered([]) }

    if (isNaN(Number(term))) {
      setPokemonFiltered(
        simplePokemonList.filter(
          (poke) => poke.name.toLocaleLowerCase()
            .includes(term.toLocaleLowerCase())
        )
      )
    } else {
      const pokemonById = simplePokemonList.find(poke => poke.id === term)

      setPokemonFiltered((pokemonById) ? [pokemonById] : [])
    }
  }, [term])

  if (isFetching) {
    return <Loading />
  }

  return (
    <View style={{
      flex: 1,
      marginHorizontal: 20
    }}
    >
      <SearchInput
        onDebounce={setTerm}
        style={{
          position: 'absolute',
          width: screenWidth - 40,
          zIndex: 999,
          top: (Platform.OS === 'ios') ? top : top + 30
        }}
      />

      <FlatList
        data={pokemonFiltered}
        showsVerticalScrollIndicator={false}
        keyExtractor={(pokemon) => pokemon.id}
        numColumns={2}
        ListHeaderComponent={( // ->Header
          <Text style={{
            ...styles.title,
            ...styles.globalMargin,
            paddingBottom: 10,
            marginTop: (Platform.OS === 'ios') ? top + 60 : top + 80
          }}
          >{term}
          </Text>
        )}
        renderItem={({ item }) => (<PokemonCard pokemon={item} />)}
      />
    </View>
  )
}
