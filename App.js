import { View, Text } from 'react-native'
import React from 'react'
import RouterNavigation from './src/components/navigation/StackNavigatio'
import { NavigationContainer } from '@react-navigation/native'
import WelcomeScreen from './src/components/screen/welcomeScreen'
import Firm from './src/components/screen/screenN/Firm'
import Profile from './src/components/screen/screenN/Feature'

const App = () => {
  return (
    <NavigationContainer>
         <RouterNavigation />
    </NavigationContainer>
    
    
  )
}

export default App
