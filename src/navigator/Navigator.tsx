/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../screens/Home'
import { Pokemon } from '../screens/Pokemon'

const Stack = createStackNavigator()

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
