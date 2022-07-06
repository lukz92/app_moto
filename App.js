import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './screens/Login'
import Home from './screens/Home'
import Detalhes from './screens/Detalhes'
import Detalhes1 from './screens/Detalhes1'
import Detalhes2 from './screens/Detalhes2'
import Detalhes3 from './screens/Detalhes3'

const Stack = createNativeStackNavigator()

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false
        }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false
        }}
        name="Home"
        component={Home}
      />
      <Stack.Screen name="Detalhes" component={Detalhes} />
      <Stack.Screen name="Detalhes1" component={Detalhes1} />
      <Stack.Screen name="Detalhes2" component={Detalhes2} />
      <Stack.Screen name="Detalhes3" component={Detalhes3} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}
