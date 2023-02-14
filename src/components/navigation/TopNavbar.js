import { View, Text ,StyleSheet, Dimensions, Image} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons,AntDesign,FontAwesome } from '@expo/vector-icons'
import React from 'react';
import { LargeCard } from '../screen/screenN/largeCard';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const TopNavbar = () => {
  return (
        <View style={styles.container} >
         <LargeCard />
        </View>
  )
}

export default TopNavbar


const styles = StyleSheet.create({
  container:{
      backgroundColor:'#0F1417',
      height:height,

  },
  content:{
      flexDirection:'row'
  },
})