import { View, Text,Image } from 'react-native'
import React,{useEffect, useState} from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import axios from 'axios'


const Origin = () => {
  const [trend,setTrend] = useState([])
  const [animation,setAnimation] = useState(true)

  useEffect(()=>{
    Trend()
  })

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
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {trend.map((item)=>{
        return(
          <View style={{backgroundColor:'black',paddingBottom:18,paddingTop:18}} key={item.id} >
          <View style={{
            width:110,
            height:188,
            borderRadius:5,
            marginHorizontal:8
          }}>
            <Image 
            source={{ 
              uri:`https://image.tmdb.org/t/p/w500${item.poster_path}`,
            }} style={{
              width:110,
              height:104,
              padding:20,
              borderRadius:2
            }}/>
            <Text numberOfLines={2} style={{
              color:'white',
              fontSize:12,
              fontWeight:'bold',
              textAlign:'center',
              margin:2
    
            }}>
              {item.title}
            </Text>
            <Text numberOfLines={3} style={{
               color:'grey',
               margin:5,
               fontSize:10
            }}>
                {item.overview}
            </Text>
          </View>
          </View>
        )
      })}
      
      </ScrollView>
  )
}

export default Origin