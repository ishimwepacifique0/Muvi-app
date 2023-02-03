import { View, Text, Pressable,Dimensions,TouchableOpacity, StyleSheet ,Image, ActivityIndicator} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default function NextScreen({navigation}){
    const [show,setShow] = React.useState(false)
  return (
   <SafeAreaView>
    <View style={styles.container}>
     <Image
     source={{
      uri:'https://destinationksa.com/wp-content/uploads/2022/05/muvi-studios-Dark-BG-710x434.jpg'
     }}
     style={{ width:200,height:200 ,marginTop:20,borderRadius:20}}
     />
    <View style={{ marginTop:40}}>
        <Text style={styles.h1}>Welcome to muvi</Text>
        </View>
         <View style={{marginTop:20}}>
         <Text style={styles.h3}>Free a movie and streaming all you need</Text>
        <Text style={styles.h3}>everytime and everywhere</Text>
         </View>
           <View style={{ flexDirection:'row', marginRight:7}}>
           <View style={styles.circle1}></View>
            <View style={styles.circle2}></View>
            <View style={styles.circle3}></View>

           </View>
           <ActivityIndicator size={'large'} color={'white'}  animating={show}/>
           <View style={{marginTop:30}}>
        <TouchableOpacity>
                            <Pressable style={styles.button} onPress={()=>{
                                setShow(true)
                                setTimeout(() => {
                                    setShow(false)
                                    navigation.navigate('home')
                                }, 2000);
                                }}>
                <Text style={{ color:'#000000',padding:5,fontSize:18,fontWeight:'bold',textAlign:'center'}}>
                    Watch movie
                </Text>
              </Pressable>
              </TouchableOpacity>
              <TouchableOpacity>
                            <Pressable style={styles.button} onPress={()=>{
                                  setShow(true)
                                  setTimeout(() => {
                                      setShow(false)
                                      navigation.navigate('login')
                                  }, 2000);
                                  }}>
                <Text style={{ color:'white',padding:5,fontSize:18,fontWeight:'bold',textAlign:'center'}}>
                    Sign in
                </Text>
              </Pressable>
              </TouchableOpacity>
            </View>
            </View>
        </SafeAreaView>
  )
} 


const styles = StyleSheet.create({
  container:{
    backgroundColor:'#26282C',
    height:height,
    padding:6,
    alignItems:'center'

},
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
      textAlign:'center'

  },
  button:{
      backgroundColor:'#e5a50a',
      padding:5,
      margin:7,
      borderRadius:4,
      width:350
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