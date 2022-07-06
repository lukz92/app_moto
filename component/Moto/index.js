import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Moto(props) {
  function filterDesc(desc) {
    if (desc.length < 10) {
      return desc
    }

    return `${desc.substring(0, 23)}...`
  }

  return (
    <TouchableOpacity style={styles.container} onPress={props.onClick}>
      <Image source={props.img} style={styles.img} />
      <Text source={props.name} style={styles.text}>
        {filterDesc(props.children)}{' '}
      </Text>
      <Text style={styles.text}> {props.cost}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: '2%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 120,
    height: 120
  }
})
