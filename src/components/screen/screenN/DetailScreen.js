import { Ionicons, AntDesign,Octicons,Entypo,FontAwesome5 } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import {
    View,
    Text,
    Image,
    Dimensions,
    ImageBackground,
    TouchableOpacity,
    StyleSheet,
    Linking
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import WatchTrailer from './WatchTrailer';
import YoutubeIframe from 'react-native-youtube-iframe';
import axios from 'axios';
import { ActivityIndicator } from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Detail = ({ route }) => {
    const [detail, SetDetail] = React.useState({});
    const [playing,setPlaying] = React.useState(null)
    const [playbutton, setPlayingbutton] = React.useState(false)
    console.log(playing)
    let message = ""
    if (playing != null) message = `https://www.youtube.com/watch?v=${playing?.results[0]?.key}`
          
    React.useEffect(() => {
        SetDetail(route.params)
        showTrail()
    }, [detail])

    const showTrail = async () =>{
       let {data} = await axios.get(`https://api.themoviedb.org/3/movie/${detail?.id}/videos?api_key=d9cf23cf23f14a29b69eccb99afeaeff&language=en-US`
        ) 
        setPlaying(data)
        console.log(data)
    }
    // console.log(playing.results[0].key)
    return (
        <>
            <StatusBar style='light' />

            <View key={detail.id}>
                <ImageBackground
                    resizeMode='cover'
                    source={{
                        uri: `https://image.tmdb.org/t/p/w500${detail.backdrop_path}`
                    }}
                    style={{
                        width: width,
                        height: 300
                    }}
                >
                    <View
                        style={{
                            backgroundColor: '#222222',
                            height: 60,
                            opacity: 0.2,
                            flexDirection:'row',
                            justifyContent:'space-between'
                        }}>
                        <AntDesign name="arrowleft" size={24} color="white" style={{
                            marginTop: 30,
                            marginHorizontal: 4,
                        }} 
                         onPress={()=>{
                            setPlayingbutton(true)
                         }}
                         />

                        </View>
                
                    {!playing? (
                    <ActivityIndicator size='large' color={'white'} />
                ):(
                    
                    <YoutubeIframe 
                    height={340}
                    widtht={200}
                    resizeMode = "contain"
                    play={true}
                    videoId={playing?.results[0]?.key}
                    onChangeState={(event)=>console.log(event)}
                    />
                )
            }

                    <TouchableOpacity>
                        <AntDesign name="playcircleo" size={38} color="yellow"
                            style={{
                                textAlign: 'center',
                                position: 'relative',
                                top: 90
                            }}
                        />
                    </TouchableOpacity>

                </ImageBackground>

                <View style={styles.container}>
                    
                    <Octicons name="horizontal-rule" size={60} color="silver" 
                     style={{
                        marginHorizontal: 2,
                        marginTop: -8,
                        borderRadius: 6,
                        textAlign: 'center'
                    }}/>
                    <View style={{
                        flexDirection:'row',
                        justifyContent:'space-between',
                        marginHorizontal:5,
                        marginTop:-10
                    }}>
                        <View>
                            <Text numberOfLines={2} style={{color:'silver',fontSize:16,fontWeight:'bold'}}>{detail.title}</Text>
                        </View>
                        <View>
                        <FontAwesome5 name="whatsapp" size={24} color="green"
                        onPress={()=>{
                                Linking.openURL(`whatsapp://send?text=${message}`)
                           }}
                        />
                        </View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{ borderRightWidth:1,borderColor:'silver',marginRight:4,paddingRight:4,margin:5,color:'silver'}}>
                            <Text style={{ color:'silver'}}>{detail.vote_count}</Text> 
                        </View>
                        <View style={{ borderRightWidth:1,borderColor:'silver',marginRight:4,paddingRight:4,margin:5,color:'silver'}}>
                            <Text style={{ color:'silver'}}>{detail.genre_ids}</Text> 
                        </View>
                        <View style={{ borderRightWidth:1,borderColor:'silver',marginRight:4,paddingRight:4,margin:5,color:'silver'}}>
                            <Text style={{ color:'silver'}}>{detail.original_title}</Text>
                        </View>

                    </View>
                    <View style={{ flexDirection:'row',justifyContent:'space-between',marginHorizontal:5}}>
                    
                    <View>
                        <Entypo name="star" size={16} color="yellow" />
                        <Text style={{color:'white',fontWeight:'bold',marginHorizontal:3}}>
                            {detail.vote_average}
                        </Text>
                    </View>
                    <View>
                        <FontAwesome5 name="sms" size={24} color="blue"
                        onPress={()=>{
                            Linking.openURL(`sms:number=0788817236&body=${message}`)
                        }}
                        />
                        </View>
                    </View>
                    <View style={{
                        backgroundColor:'silver',height:1,width:347,marginLeft:7,marginTop:8,borderRadius:4
                    }}>

                    </View>
                    <View style={{marginHorizontal:5,marginVertical:5}}>
                        <Text numberOfLines={2} style={{color:'silver'}}>{detail.overview}</Text>
                    </View>
                    <View>
                            <Text  style={{color:'silver',fontSize:16,fontWeight:'bold',marginHorizontal:5}}>Watch Trailer</Text>
                        </View>

                        <WatchTrailer />
                </View>
            </View>
        </>
    )
}
export default Detail;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#202123',
        color: 'whites',
        height: height,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        position: 'relative',
        top: -30,
        paddingHorizontal:4

    }
})