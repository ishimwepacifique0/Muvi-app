import { View, Text } from 'react-native'
import React from 'react'
import RouterNavigation from './src/components/navigation/StackNavigatio'
import { NavigationContainer } from '@react-navigation/native'
import Series from './src/components/screen/screenN/Series'
import WatchTrailer from './src/components/screen/screenN/WatchTrailer'
import SignupScreen from './src/components/screen/signupScreen'
import SigninScreen from './src/components/screen/loginScreen'
import Store from './src/store'
import { Provider } from 'react-redux'
import Profile from './src/components/screen/screenN/Feature'


const App = () => {
  return (
    <Provider store={Store}>
    <NavigationContainer>
    <RouterNavigation />
   </NavigationContainer>
   </Provider>
  )
}

export default App
