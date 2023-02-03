import { View, Text,Image } from 'react-native'
import React,{useEffect, useState} from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import axios from 'axios'

const Origin = () => {
  const [trend,setTrend] = useState([])

  useEffect(()=>{
    Trend()
  })

  const Trend = () =>{
    axios({
        method:'get',
        url:"https://api.themoviedb.org/3/movie/top_rated?api_key=d9cf23cf23f14a29b69eccb99afeaeff&language=en-US&page=3"
    }).then((data2)=>{
        console.log(data2.data)
        setTrend(data2.data.results)
    }).catch((err) => {
        console.log(err)
    })
   };
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {trend.map((item)=>{
        return(
          <View style={{backgroundColor:'black',paddingBottom:18,paddingTop:18}}>
          <View style={{
            backgroundColor:'#0F1417',
            width:100,
            height:188,
            borderRadius:5,
            marginHorizontal:8
          }}>
            <Image 
            source={{ 
              uri:`https://image.tmdb.org/t/p/w500${item.poster_path}`,
            }} style={{
              width:100,
              height:104,
              padding:20,
              borderRadius:2
            }}/>
            <Text style={{
              color:'white',
              fontSize:10,
              fontWeight:'bold',
              textAlign:'center',
              margin:5
    
            }}>
              {item.title}
            </Text>
            <Text style={{
               color:'green',
               fontWeight:'bold',
               margin:5,
               textAlign:'center'
            }}>
                {item.release_date}
            </Text>
          </View>
          </View>
        )
      })}
      
      </ScrollView>
  )
}

export default Origin