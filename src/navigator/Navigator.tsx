/* eslint-disable @typescript-eslint/explicit-function-return-type, @typescript-eslint/consistent-type-definitions */
import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../screens/Home'
import { Pokemon } from '../screens/Pokemon'
import { SimplePokemon } from '../interfaces/pokemon'

export type RootStackParams = {
  Home: undefined
  Pokemon: {simplePokemon: SimplePokemon, color: string}
}

const Stack = createStackNavigator<RootStackParams>()

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Pokemon' component={Pokemon} />
    </Stack.Navigator>
  )
}
