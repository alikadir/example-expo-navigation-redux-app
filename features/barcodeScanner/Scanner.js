import { BlurView } from 'expo-blur'
import * as Haptics from 'expo-haptics'
import { useRef, useEffect, useState } from 'react'
import { Text, StyleSheet, ScrollView } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { useDispatch, useSelector } from 'react-redux'
import { addBarcode } from './scannerSlice.js'

export default function Scanner () {
  const [hasPermission, setHasPermission] = useState(null)
  const [scanned, setScanned] = useState(false)
  const { list } = useSelector((state) => state.scanner)
  const dispatch = useDispatch()
  const scrollRef = useRef()

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }, [])

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true)
    dispatch(addBarcode({ type, data }))
    await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
    scrollRef.current.scrollToEnd({ animated: true })
    setTimeout(() => setScanned(false), 2000)
  }

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }

  return (

    <BarCodeScanner
      onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      style={[StyleSheet.absoluteFillObject, styles.scanner]}
    >
      <BlurView intensity={50} style={styles.list}>
        <ScrollView ref={scrollRef}>
          {list.map((item, i) => {
            return <Text style={styles.listItem} key={i}>{item.type} - {item.data}</Text>
          })}
        </ScrollView>
      </BlurView>
    </BarCodeScanner>

  )
}

const styles = StyleSheet.create({
  scanner: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    justifyContent: 'flex-end'
  },
  list: {
    flex: 0.3,
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 5,
    paddingBottom: 15
  },
  listItem: {
    paddingBottom: 8
  }

})
