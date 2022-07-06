import React from 'react'
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import Color from '../component/Color'
import Button_CC from '../component/Button_CC'

export default function Detalhes1() {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../assets/banner3.png')}
        style={styles.image}
        resizeMode="cover"
      />
      <View>
        <View>
          <Text style={[styles.title, { fontSize: 25 }]}>R$ 31,000</Text>
          <Text style={[styles.title, { fontSize: 30 }]}>Moto 3</Text>
        </View>
      </View>

      <View style={styles.color}>
        <Color Color="#000" />
        <Color Color="#191970" />
        <Color Color="#800000" />
        <Color Color="#FF8C00" />
      </View>

      <View style={{ flexDirection: 'row', width: '100%' }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Button_CC bgColor="#17181a" color="#FFF">
            125 Cc
          </Button_CC>
          <Button_CC>150 Cc</Button_CC>
          <Button_CC>200 Cc</Button_CC>
          <Button_CC>250 Cc</Button_CC>
        </ScrollView>
      </View>
      <View>
        <Text style={{ paddingTop: 10 }}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here'
        </Text>
        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.submitText}>Compre já a sua !!!</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  image: {
    width: '100%'
  },

  title: {
    paddingHorizontal: '2%'
  },
  color: {
    flexDirection: 'row',
    marginVertical: '7%'
  },
  btnSubmit: {
    backgroundColor: '#708090',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginTop: 10,
    marginLeft: 18
  },

  submitText: {
    fontSize: 18
  }
})
