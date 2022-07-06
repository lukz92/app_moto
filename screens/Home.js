import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import Moto from '../component/Moto'
import { useNavigation } from '@react-navigation/native'

export default function Home() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#000" translucent={true} />
      <View style={styles.header}>
        <Image source={require('../assets/topo.jpeg')} style={styles.topo} />

        <View style={styles.textContainer}>
          <Text style={styles.text}>Catalogo</Text>
          <Text style={[styles.text, { color: '#A9A9A9' }]}>-</Text>
          <Text style={[styles.text, { color: '#A9A9A9' }]}>Motos</Text>
          <TouchableOpacity
            style={{ position: 'absolute', right: 0, alignSelf: 'center' }}
          ></TouchableOpacity>
        </View>

        <View style={styles.line} />

        <ScrollView>
          <Text style={styles.text}>Lançamentos</Text>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-around' }}
          >
            <Moto
              img={require('../assets/icone1.png')}
              cost="R$15,000"
              onClick={() => navigation.navigate('Detalhes')}
            >
              teste
            </Moto>
            <Moto
              img={require('../assets/icone2.png')}
              cost="R$25,000"
              onClick={() => navigation.navigate('Detalhes1')}
            >
              teste 2
            </Moto>
          </View>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-around' }}
          >
            <Moto
              img={require('../assets/icone3.png')}
              cost="R$31,000"
              onClick={() => navigation.navigate('Detalhes2')}
            >
              teste 3
            </Moto>
            <Moto
              img={require('../assets/icone4.png')}
              cost="R$10,000"
              onClick={() => navigation.navigate('Detalhes3')}
            >
              teste 4
            </Moto>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    marginBottom: 8
  },
  topo: {
    width: '100%',
    height: '25%'
  },
  textContainer: {
    flexDirection: 'row',
    marginVertical: '2%',
    marginHorizontal: '2%'
  },

  text: {
    fontSize: 20,
    marginHorizontal: '1%'
  },

  line: {
    borderBottomColor: '#d8d8d8',
    borderBottomWidth: 1
  }
})
