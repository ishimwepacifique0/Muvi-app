import { View, Text,StyleSheet,Dimensions, ActivityIndicator, StatusBar } from 'react-native'
import React from 'react'
import { ScrollView,Image } from 'react-native-gesture-handler'
import Origin from './Origin'
import axios from 'axios'
import Series from './popular'
import { SafeAreaView } from 'react-native-safe-area-context'

const height = Dimensions.get('window').height;


export default function Firm(){
  const [download,setDownload] = React.useState([])

  React.useEffect(() => {
    ownload()
  }, []);
  const ownload = ()=>{
      axios({
        method:'get',
        url:'https://api.themoviedb.org/3/movie/top_rated?api_key=d9cf23cf23f14a29b69eccb99afeaeff&language=en-US&page=3'
      }).then((data1)=>{

        setDownload(data1.data.results);
      }).catch((err)=>{
          console.log(err)
      })
  }
  return(
    <View>
    <View style={styles.container}>
      <Text style={{color:'white',fontSize:20,marginVertical:30,marginHorizontal:10,fontWeight:'bold'}}>
          My list
        </Text>
        <ScrollView>
        <View>
          <Series/>
        </View>

        <View style={{justifyContent:'flex-end',marginHorizontal:1}}>
          <Text style={{color:'white',fontWeight:'bold', marginVertical:10,fontSize:20}}> Recommended  to download</Text>
          <Origin />
        </View>
        <View style={{
          marginBottom:60,
        }}>
          <ActivityIndicator size={24} />
        </View>
        </ScrollView>
       
    </View>
    <StatusBar  style="light" />
  </View>
  )
}


 const styles = StyleSheet.create({
   container:{
       backgroundColor:'#26282C',
       height:height,
 
   },
   textinput:{
       backgroundColor:'#2C2D31',
       marginHorizontal:3,
       marginVertical:10,
       color:'white',
       width:350,
       borderRadius:4
   },
   buttonsearch:{
     position:'relative',
     right:44,
     top:24
   },
   seach:{
       flexDirection:'row',
       justifyContent:'space-between'
   },
 })