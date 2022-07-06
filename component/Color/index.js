import React from 'react'
import { StyleSheet, Dimensions, TouchableOpacity } from 'react-native'

export default function Color(props) {
  return (
    <TouchableOpacity
      style={[style.container, { backgroundColor: props.Color }]}
    ></TouchableOpacity>
  )
}

const style = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.05,
    height: Dimensions.get('window').width * 0.05,
    borderRadius: (Dimensions.get('window').width * 0.05) / 2,
    marginHorizontal: '2.5%',
    elevation: 5
  }
})
