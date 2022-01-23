import axios from 'axios'
import React from 'react'
import { Button, View, StyleSheet } from 'react-native'
import * as Haptics from 'expo-haptics'

export default function Main ({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title='Live Stream'
        onPress={async () => {
          navigation.navigate('LiveStream')
          await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
        }}
      />
      <Button
        title='Snake' onPress={async () => {
          navigation.navigate('Snake')
          await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
        }}
      />
      <Button title='Storage' onPress={() => navigation.navigate('Storage')} />
      <Button title='fetch' onPress={() => axios.get('https://www.google.com')} />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
