import {
   View,
   Text,
   ImageBackground,
   StyleSheet,
   Pressable,
   Dimensions,
   TouchableOpacity
} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import { ActivityIndicator, TextInput } from 'react-native-paper'
import React from 'react'

const image = require('./image/1.webp')

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function AppScreen({navigation}){
    const [show,setShow] = React.useState(false)
    return(
        <SafeAreaView>
          <ImageBackground source={image} resizeMode="cover" style={styles.image} imageStyle={{opacity:0.28}}>
        <View style={{
            margin:10,
            flex:1,
            justifyContent:'center'
        }}>
         <ActivityIndicator size={'large'} color={'white'} animating={show}/>
        <View style={{ marginTop:60}}>
        <Text style={styles.h1}>Enjoy your favourite</Text>
        <Text style={styles.h1}>Movie everywhere</Text>
        </View>
         <View style={{marginTop:20}}>
         <Text style={styles.h3}>Browser through our collection and</Text>
        <Text style={styles.h3}>discover hundreds of movies and series that</Text>
        <Text style={styles.h3}> you'll love !</Text>
         </View>
           <View style={{ flexDirection:'row', marginRight:7}}>
           <View style={styles.circle1}></View>
            <View style={styles.circle2}></View>
            <View style={styles.circle3}></View>

           </View>
            </View>

            <View style={{marginBottom:30}}>
        <TouchableOpacity>
              <Pressable style={styles.button} onPress={()=>{
                setShow(true)
                setTimeout(() => {
                    setShow(false)
                    navigation.navigate('next')
                }, 1000);
                }}>
                <Text style={{ color:'#000000',padding:5,fontSize:18,fontWeight:'bold',textAlign:'center'}}>
                    Get started
                </Text>
              </Pressable>
              </TouchableOpacity>
        </View>

            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    image:{
        backgroundColor:'#26282C',
        width:width,
        height:height

    },
    h1:{
        color:'white',
        fontSize:24,
        fontWeight:'bold',


    },
    h3:{
        fontSize:13,
        color:'white',
        fontWeight:'bold',

    },
    button:{
        backgroundColor:'#e5a50a',
        padding:5,
        margin:7,
        borderRadius:4,
    },
    circle1:{
        marginTop:15,
        marginRight:2,
        width:30,
        height:4,
        borderRadius:10,
        backgroundColor:'#e5a50a'
    },
    circle2:{
        marginTop:15,
        marginRight:2,
        width:20,
        height:4,
        borderRadius:10,
        backgroundColor:'#cccccc'
    },
    circle3:{
        marginTop:15,
        width:10,
        height:4,
        borderRadius:10,
        backgroundColor:'#cccccc'
    }
})