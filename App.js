import React from 'react'

import { Provider } from 'react-redux'
import Scanner from './features/barcodeScanner/Scanner.js'
import LiveStream from './features/liveStream/LiveStream'
import Main from './features/main/Main'
import Snake from './features/snake/Snake'
import Storage from './features/storage/Storage'
import { store } from './redux/store.js'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export default function App () {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Main'>
          <Stack.Screen name='Main' component={Main} />
          <Stack.Screen name='LiveStream' component={LiveStream} options={{ presentation: 'modal' }} />
          <Stack.Screen name='Snake' component={Snake} />
          <Stack.Screen name='Storage' component={Storage} />
          <Stack.Screen name='Scanner' component={Scanner} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
