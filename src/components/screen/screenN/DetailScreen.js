import { Ionicons, AntDesign,Octicons,Entypo } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import {
    View,
    Text,
    Image,
    Dimensions,
    ImageBackground,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import WatchTrailer from './WatchTrailer';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Detail = ({ route }) => {
    const [detail, SetDetail] = React.useState({});
    console.log(route.params)

    React.useEffect(() => {
        SetDetail(route.params)
    }, [])
    console.log(detail)
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
                            opacity: 0.2
                        }}>
                        <AntDesign name="arrowleft" size={24} color="white" style={{
                            marginTop: 30,
                            marginHorizontal: 4,
                        }} />
                    </View>

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
                        <Octicons name="bookmark" size={20} color="white" />
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
                    <View style={{ flexDirection:'row',marginHorizontal:5}}>
                    <Entypo name="star" size={16} color="yellow" />
                    <View>
                        <Text style={{color:'white',fontWeight:'bold',marginHorizontal:3}}>
                            {detail.vote_average}
                        </Text>
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