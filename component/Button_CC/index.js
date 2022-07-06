import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function Button_CC(props) {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: props.bgColor || '#FFF' }]}
    >
      <Text style={[styles.text, { color: props.color || '#c9c9' }]}>
        {props.children}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: '#e6e6e6',
    borderWidth: 3,
    marginHorizontal: 10
  },
  text: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    textAlignVertical: 'center'
  }
})
