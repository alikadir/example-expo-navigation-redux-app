import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Scanner from './features/barcodeScanner/Scanner.js'
import LiveStream from './features/liveStream/LiveStream.js'
import Main from './features/main/Main.js'
import Snake from './features/snake/Snake.js'
import Storage from './features/storage/Storage.js'

const Stack = createNativeStackNavigator()
const handleScreenListener = ({ navigation }) => ({
  state: e => {
    console.log('state changed', e.data)
  }
})

export default function Navigation () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Main' screenListeners={handleScreenListener}>
        <Stack.Screen name='Main' component={Main} />
        <Stack.Screen name='LiveStream' component={LiveStream} options={{ presentation: 'modal' }} />
        <Stack.Screen name='Snake' component={Snake} />
        <Stack.Screen name='Storage' component={Storage} />
        <Stack.Screen name='Scanner' component={Scanner} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
