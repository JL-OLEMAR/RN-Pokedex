/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react'
import { Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

import { TabListado } from './TabListado'
import { TabSearch } from './TabSearch'

const Tab = createBottomTabNavigator()

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: 'white' }}
      tabBarOptions={{
        activeTintColor: '#5856D6',
        labelStyle: { marginBottom: (Platform.OS === 'ios') ? 0 : 10 },
        style: {
          position: 'absolute',
          backgroundColor: 'rgba(255,255,255,0.92)',
          borderWidth: 0,
          elevation: 0,
          height: (Platform.OS === 'ios') ? 80 : 60
        }
      }}
    >
      <Tab.Screen
        name='Listado'
        component={TabListado}
        options={{
          tabBarLabel: 'Listado',
          tabBarIcon: ({ color }) => <Icon name='list-outline' color={color} size={25} />
        }}
      />
      <Tab.Screen
        name='Search'
        component={TabSearch}
        options={{
          tabBarLabel: 'Búsqueda',
          tabBarIcon: ({ color }) => <Icon name='search-outline' color={color} size={25} />
        }}
      />
    </Tab.Navigator>
  )
}
