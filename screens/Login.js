import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native'
import React, { useState } from 'react'

export default function Login({ navigation }) {
  const [Email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const entrar = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }]
    })
  }
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.logo}>
        <Image source={require('../assets/logo.png')} />
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCorrect={false}
          keyboardType="email-address"
          onChangeText={value => setEmail(value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          autoCorrect={false}
          onChangeText={value => setPassword(value)}
        />
        <TouchableOpacity onPress={() => entrar()} style={styles.btnSubmit}>
          <Text style={styles.submitText}>Acessar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.textRegister}>Criar Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },

  logo: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 20
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 50
  },
  input: {
    backgroundColor: '#FFFF',
    width: '90%',
    marginBottom: 15,
    fontSize: 17,
    borderRadius: 7,
    padding: 10
  },
  btnSubmit: {
    backgroundColor: '#FFFF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },

  submitText: {
    fontSize: 18
  },
  btnRegister: {
    marginTop: 10
  },
  textRegister: {
    color: '#fff'
  }
})
