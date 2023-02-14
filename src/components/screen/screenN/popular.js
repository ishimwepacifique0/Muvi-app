import { View, Text,StyleSheet,Dimensions,Image,ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React ,{useEffect,useState}from 'react'
import { Feather,MaterialIcons } from '@expo/vector-icons'
import { TextInput } from 'react-native-paper'
import axios from 'axios'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Series = () => {
 const [search,setSearch] = useState([])

 React.useEffect(() => {
   Searchapi()
 }, [])

 const Searchapi = () =>{
  axios({
    method:'get',
    url:'https://api.themoviedb.org/3/movie/upcoming?api_key=d9cf23cf23f14a29b69eccb99afeaeff&language=en-US&page=3'
   }).then((data)=>{
    setSearch(data.data.results)
   }).catch((err)=>{
    console.log(err)
   })
 }
 

  return (
      <View style={styles.container}>
        <ScrollView>
        { search.map((item,key)=>{
          return(
            <View style={{flexDirection:'row',marginVertical:6}} key={item.id}>
            <Image 
            source={{
              uri:`https://image.tmdb.org/t/p/w500${item.poster_path}`
            }}
            style={{
              width:150,
              height:100,
              marginHorizontal:13,
              borderRadius:3
  
            }}
            />
            <View style={{marginVertical:4,}}>
              <Text style={{color:'white',fontSize:15,fontWeight:'bold',marginRight:20}} numberOfLines={2}>{item.title}</Text>
              <Text style={{color:'white', fontSize:15}}>{item.release_date}</Text>
              <Text style={{ color:'white',fontSize:15}} numberOfLines={1}>{item.overview}</Text>
              <MaterialIcons name="hd" size={24} color="#e5a50a" />
            </View>
          </View>
          );
        }) }
        </ScrollView>

      </View>
  )
}

export default Series

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