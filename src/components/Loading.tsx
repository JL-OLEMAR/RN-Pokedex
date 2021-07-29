/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'

export const Loading = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size={50} color='grey' />
      <Text>Cargando...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
