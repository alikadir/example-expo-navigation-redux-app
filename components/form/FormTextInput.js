import React from 'react'
import { TextInput } from 'react-native'
import { useController } from 'react-hook-form'

export default function FormTextInput ({ name, control, rules, ...props }) {
  const { field: { onChange, value } } = useController({ control, name, rules })
  return <TextInput onChangeText={onChange} value={value} {...props} />
}
