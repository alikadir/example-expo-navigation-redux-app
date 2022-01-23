import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { View, Button, StyleSheet, Text, FlatList, Alert, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import FormTextInput from '../../components/form/FormTextInput.js'

export default function Storage () {
  const { handleSubmit, control, formState: { errors } } = useForm()
  const [list, setList] = useState([])
  useEffect(async () => { await syncList() }, [])

  const syncList = async () => {
    const storageList = []
    const keys = await AsyncStorage.getAllKeys()
    for (const key of keys) {
      storageList.push({ key, value: await AsyncStorage.getItem(key) })
    }
    setList(storageList)
  }

  const addItem = async ({ recordKey, recordValue }) => {
    await AsyncStorage.setItem(recordKey, recordValue)
    await syncList()
  }

  const removeItem = async (key) => {
    Alert.alert(
      'Remove Item',
      `Are you sure you want to remove "${key}" item?`,
      [
        { text: 'Cancel' },
        {
          text: 'OK',
          onPress: async () => {
            await AsyncStorage.removeItem(key)
            await syncList()
          }
        }
      ]
    )
  }

  const Item = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => removeItem(item.key)}>
        <View style={styles.itemContainer}>
          <Text style={styles.itemKey}>{item.key}</Text>
          <Text style={styles.itemValue}>{item.value}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  const AddItemCard = () => {
    return (
      <View>
        <Text style={styles.title}>Add Item</Text>
        <FormTextInput
          style={errors.recordKey ? [styles.input, styles.inputError] : styles.input}
          control={control}
          rules={{ required: true, minLength: 3, pattern: /^\S+@\S+\.\S+$/ }}
          name='recordKey'
          placeholder='Key'
        />
        <FormTextInput
          style={styles.input}
          control={control}
          name='recordValue'
          placeholder='Value'
        />
        <Button
          title='Save'
          onPress={handleSubmit(addItem)}
        />
      </View>
    )
  }

  const ListItemCard = () => {
    return (
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>List</Text>
        <FlatList
          data={list}
          renderItem={({ item }) => <Item item={item} />}
        />
      </View>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <AddItemCard />
      <ListItemCard />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'silver',
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    padding: 5,
    backgroundColor: 'white'
  },
  inputError: {
    borderColor: 'red'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: '#eeeeee'
  },
  itemKey: {
    fontWeight: 'bold',
    flex: 0.4
  },
  itemValue: {
    fontSize: 15,
    flex: 0.6
  }
})
