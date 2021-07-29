/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useState } from 'react'
import { View, StyleSheet, TextInput, Platform, StyleProp, ViewStyle } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useDebouncedValue } from '../hooks/useDebouncedValue'

interface Props {
  onDebounce: (value: string) => void
  style?: StyleProp<ViewStyle>
}

export const SearchInput = ({ onDebounce, style }: Props) => {
  const [textValue, setTextValue] = useState('')
  const debouncedValue = useDebouncedValue(textValue)

  useEffect(() => {
    onDebounce(debouncedValue)
  }, [debouncedValue])

  return (
    <View style={{
      ...styles.container,
      ...style as any
    }}
    >
      <View style={styles.textBackground}>
        <TextInput
          autoCapitalize='none'
          autoCorrect={false}
          placeholder='Buscar pokémon'
          value={textValue}
          onChangeText={setTextValue}
          style={{
            ...styles.textInput,
            top: (Platform.OS === 'ios') ? 0 : 2
          }}
        />
        <Icon name='search-outline' color='grey' size={30} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    top: 10
  },
  textBackground: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F1F3',
    borderRadius: 50,
    height: 40,
    paddingHorizontal: 20,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5

  },
  textInput: {
    flex: 1,
    fontSize: 18
  }
})
