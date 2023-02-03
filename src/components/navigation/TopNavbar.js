import { View, Text ,StyleSheet, Dimensions, Image} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons,AntDesign,FontAwesome } from '@expo/vector-icons'
import React from 'react';
import TopheaderNavbar from './topHeaderNavbar';
import { LargeCard } from '../screen/screenN/largeCard';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const TopNavbar = () => {
  return (
        <View style={styles.container} >
        {/* <View style={{backgroundColor:'#222222',width:width,paddingLeft:10,paddingRight:10}}>
        <View style={{ flexDirection:'row',justifyContent:'space-between'}}>
        <View style={styles.content}>
                <View>
                <Image source={require('../screen/image/logo6.png')}
                  style={{width:40,
                    height:34,
                    marginTop:10,
                    marginRight:5,
                    borderRadius:6
                  }}/>
                </View>
            <View>
            <Text style={{
                fontSize:28,
                color:'#ffffff',
                fontWeight:'bold',
                marginTop:8
            }}>
                Muvi
            </Text>
            </View>
         </View>
         <View style={{ flexDirection:'row', marginTop:13,alignItems:'stretch'}}>
         <FontAwesome name="bookmark-o" size={16} color="white"  style={{marginRight:15}}/>
         <Ionicons name="ios-notifications-outline" size={16} color="white"  style={{marginRight:15}} />
         </View>
        </View>
        </View> */}
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