import { ImageBackground, StyleSheet, Text, View,ScrollView,Dimensions, Pressable, TouchableOpacity, ActivityIndicator } from 'react-native'
import React ,{ useEffect}from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios'
import { FontAwesome5 } from '@expo/vector-icons'
import Origin from './Origin'


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

 export const LargeCard = ({navigation}) => {

   const [moviePopular,setMoviePopular] = React.useState([])
   const [movieTrend,setMovieTrend] = React.useState([])
   const [trend,setTrend] = React.useState([])

   useEffect(() => {
     Popular();
     New();
     Trend();
   }, []);

   const Popular = () =>{
    axios({
        method:'get',
        url:"https://api.themoviedb.org/3/movie/popular?api_key=d9cf23cf23f14a29b69eccb99afeaeff&language=en-US&page=1"
    }).then((data1)=>{
        setMoviePopular(data1.data.results)
    }).catch((err) => {
        console.log(err)
    })
   };

   const New = () =>{
    axios({
        method:'get',
        url:"https://api.themoviedb.org/3/movie/top_rated?api_key=d9cf23cf23f14a29b69eccb99afeaeff&language=en-US&page=2"
    }).then((data2)=>{
        setMovieTrend(data2.data.results)
    }).catch((err) => {
        console.log(err)
    })
   };

   const Trend = () =>{
    axios({
        method:'get',
        url:"https://api.themoviedb.org/3/movie/top_rated?api_key=d9cf23cf23f14a29b69eccb99afeaeff&language=en-US&page=3"
    }).then((data2)=>{
        setTrend(data2.data.results)
    }).catch((err) => {
        console.log(err)
    })
   };


  return (
    <View style={styles.container} >
        <ScrollView>
            <View style={{ marginLeft:12, marginVertical:13,flexDirection:'row' }}>
            <Pressable style={{borderWidth:1,borderColor:'#cccccc',borderRadius:4,marginRight:8,padding:3,width:120}}>
                <Text style={{ textAlign:'center',color:'white'}}>
                    Popular Today
                </Text>
            </Pressable>
            <Pressable style={{borderWidth:1,borderColor:'#cccccc',borderRadius:4,marginRight:8,padding:3,textAlign:'center',width:55}}>
                <Text style={{ textAlign:'center',color:'white'}}>
                    Marvel
                </Text>
            </Pressable>
            <Pressable style={{borderWidth:1,borderColor:'#cccccc',borderRadius:4,marginRight:8,padding:3,textAlign:'center',width:80}}>
                <Text style={{ textAlign:'center',color:'white'}}>
                    Fan choise
                </Text>
            </Pressable>
            <Pressable style={{borderWidth:1,borderColor:'#cccccc',borderRadius:4,marginRight:8,padding:3,textAlign:'center',width:90}}>
                <Text style={{ textAlign:'center',color:'white'}}>
                    Star warrior
                </Text>
            </Pressable>
         </View>
         <View style={{
            flexDirection:'row',
            justifyContent:'space-between',
            marginLeft:9,
            marginTop:5,
            marginRight:7,
            marginBottom:15
            }}>
                
            <View>
                <Text style={{color:'#e5a50a',fontWeight:'bold',fontSize:17}}>
                    New Release
                </Text>
            </View>
            <View>
                <Text style={{color:'#4B4C50'}}>
                    View more
                </Text>
            </View>
            </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
        {moviePopular.map((item)=>{
            return(
                <TouchableOpacity onPress={()=>{navigation.navigate("detail",item)}}>
                <ImageBackground
                key={item.id}
                source={{
                   uri:`https://image.tmdb.org/t/p/w500${item.backdrop_path}`,
                }}
                imageStyle={{
                   borderRadius:10,
                   backgroundColor:'black',
                }}
                style={{
                   height: 170,
                   width: 340,
                   justifyContent: "flex-end",
                   paddingLeft: 15,
                   paddingBottom:15,
                   marginHorizontal:8,
                   marginVertical:9
                 }}
                resizeMode='contain'
               >
                       <Text
                        style={{
                            fontSize:25,
                            fontWeight:'bold',
                             color:'#fff',
                             textAlign:'center',
                             marginRight:20
                           }}
                       ></Text>
                       <Text style={{
                           color:'white',
                           textAlign:'center',
                           marginRight:20,
                           fontSize:15,
                           fontWeight:'bold'
                       }}>
                           { item.release_date}
                       </Text>
                       <View style={{
                         backgroundColor:'yellow',
                         width:47,
                         height:47,
                         borderRadius:50,
                         padding:9,
                         position:'relative',
                         display:'flex',
                         justifyContent:'flex-end',
                         alignItems:'flex-end',
                         left:230,
                         top:30,
                         borderWidth:2
                         
                       }}
                       
                       >
                       <FontAwesome5 
                       name="play" 
                       size={22}
                        color="black" 
                        style={{textAlign:'center',marginLeft:6}} 
                        />
                        </View>
       
               </ImageBackground>
               </TouchableOpacity>
               
            )
         })
        }
        </ScrollView>
        <View style={{
            flexDirection:'row',
            justifyContent:'space-between',
            marginLeft:9,
            marginTop:20,
            marginRight:7,
            marginBottom:15

            }}>
            <View>
                <Text style={{color:'white',fontWeight:'bold',fontSize:17}}>
                    Trending movies
                </Text>
            </View>
            <View>
                <Text style={{color:'#4B4C50'}}>
                    View more
                </Text>
            </View>
            </View>
            <Origin />
        <View style={{
            flexDirection:'row',
            justifyContent:'space-between',
            marginLeft:9,
            marginTop:20,
            marginRight:7,
            marginBottom:14
            }}>
            <View>
                <Text style={{color:'#e5a50a',fontWeight:'bold',fontSize:17}}>
                    Made for you
                </Text>
            </View>
            <View>
                <Text style={{color:'#4B4C50'}}>
                    View more
                </Text>
            </View>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginBottom:200}} >
        {movieTrend.map((item) => {
            return(
                <TouchableOpacity onPress={()=>{navigation.navigate('detail',item)}}>
                <ImageBackground
                key={item.id}
                source={{
                   uri:`https://image.tmdb.org/t/p/w500${item.poster_path}`,
                }}
                imageStyle={{
                   borderRadius:5,
                   backgroundColor:'black',
                }}
                style={{
                   height: 160,
                   width: 170,
                   opacity:0.65,
                   justifyContent: "flex-end",
                   paddingLeft: 15,
                   paddingBottom: 15,
                   marginHorizontal:4,
                   marginVertical:10
                 }}
                resizeMode='contain'
               >
                       <Text
                        style={{
                            fontSize:16,
                            fontWeight:'bold',
                             color:'#fff',
                             textAlign:'center',
                             marginRight:20
                           }}
                       >{item.title}</Text>
                       <Text style={{
                           color:'white',
                           textAlign:'center',
                           marginRight:20,
                           fontSize:15,
                           fontWeight:'bold'
                       }}>
                           { item.release_date}
                       </Text>
       
               </ImageBackground>
               </TouchableOpacity>
               
            )
         })
        }
        </ScrollView>
        <ActivityIndicator size={'large'}  />
        </ScrollView>
        </View>
  )
}
const styles = StyleSheet.create({
    imagetext:{
        flexDirection:'column',
        justifyContent:'center'
    },
    container:{
        backgroundColor:'#0F1417',
  
    },
    content:{
        flexDirection:'row'
    },
})