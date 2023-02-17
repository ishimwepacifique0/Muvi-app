import axios from 'axios'
import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    Dimensions
} from 'react-native'

const height = Dimensions.get('screen').height

const WatchTrailer = ({navigation}) =>{

    const [watch,setWatch] = React.useState([])

    React.useEffect(()=>{
        getWatch()
    },[])
    const getWatch = () =>{
        axios({
            method:'get',
            url:'https://api.themoviedb.org/3/movie/now_playing?api_key=d9cf23cf23f14a29b69eccb99afeaeff&language=en-US&page=2',
        }).then((dat)=>{
            setWatch(dat.data.results)
        }).catch((err)=>{
            console.log(err)
        })
    }
    return(
        <ScrollView>
        <View style={{backgroundColor:'#26282C',
      height:height,}}>
            {watch.map((item)=>{
                    return(
                        <>
             <TouchableOpacity>
                    
            <View key={item.id}>
                <Image source={{
                    uri:`https://image.tmdb.org/t/p/w500${item.backdrop_path}`
                }} style={{
                    width:330,
                    height:160,
                    borderRadius:7,
                    margin:5
                }} />
                <Text style={{color:'white',fontWeight:'bold',margin:3}}>{item.title}</Text>
            </View>
            </TouchableOpacity>
            </>
                    )
                })
            }
            
            </View>
            </ScrollView>
    )
}

export default WatchTrailer;