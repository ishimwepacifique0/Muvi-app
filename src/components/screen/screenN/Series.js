import { View, Text,StyleSheet,Dimensions,Image,ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React ,{useEffect,useState}from 'react'
import { Feather } from '@expo/vector-icons'
import { TextInput } from 'react-native-paper'
import axios from 'axios'
import { TouchableOpacity } from 'react-native-gesture-handler'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Series = ({navigation}) => {
 const [search,setSearch] = useState([])
 const [searchdata,setSearchdata] = useState('')

 React.useEffect(() => {
  if (searchdata.length > 0){
    Searchapi()
  }else{
    setSearch([])
  }
   
 }, [searchdata])

 const Searchapi = () =>{
  axios({
    method:'get',
    url:`https://api.themoviedb.org/3/search/movie?api_key=d9cf23cf23f14a29b69eccb99afeaeff&language=en-US&query=${searchdata}&page=1&include_adult=false`
   }).then((data1)=>{
    setSearch(data1.data.results)
   }).catch((err)=>{
    console.log(err)
   })
 }
 

  return (
      <View style={styles.container}>
        <Text style={{color:'white',fontSize:20,marginVertical:20,marginHorizontal:10,fontWeight:'bold'}}>
          Search
        </Text>
        <View style={styles.seach}>
          <TextInput 
          mode='outline'
          placeholder='Search......'
          activeUnderlineColor={'#25262A'}
          style={styles.textinput}
          onChangeText={(text)=>{setSearchdata(text)}}
          placeholderTextColor={'white'}
          />
        <Feather 
        name="search" 
        size={24} color="yellow"
         style={styles.buttonsearch}
         />
        </View>
        <View>
          <Text style={{color:'white',fontSize:16,marginHorizontal:10,fontWeight:'bold'}}>Popular movies</Text>
        </View>
        <ScrollView>
        {search.map((item,key)=>{
          return(
            <TouchableOpacity key={item.id} onPress={()=>{navigation.navigate("detail",item)}}>
              <View style={{flexDirection:'row',marginVertical:6}}>
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
              <Text style={{color:'white',fontSize:15,fontWeight:'bold',marginRight:20}}>{item.title}</Text>
              <Text style={{color:'white', fontSize:15,fontWeight:'bold'}}>{item.release_date}</Text>
              <Text style={{ color:'white',fontSize:15}} numberOfLines={1}>{item.overview}</Text>
              <Text style={{ color:'white',fontSize:15}} numberOfLines={1}>{item.popularity}</Text>
            </View>
          </View>
            </TouchableOpacity>
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