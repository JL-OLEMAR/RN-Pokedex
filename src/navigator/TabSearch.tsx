/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { RootStackParams } from './TabListado'
import { Pokemon } from '../screens/Pokemon'
import { Search } from '../screens/Search'

const Tab = createStackNavigator<RootStackParams>()

export const TabSearch = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Tab.Screen name='Home' component={Search} />
      <Tab.Screen name='Pokemon' component={Pokemon} />
    </Tab.Navigator>
  )
}
