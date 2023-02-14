import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    Image,
    Pressable,
    ActivityIndicator
} from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window'). height;


export default function WelcomeScreen({navigation}){
  const [show,setShow] = React.useState(false)
    return(
    <SafeAreaView>
      <View style={styles.container}>
      
        <Pressable onPress={
          ()=>{
            setShow(true)
            setTimeout(() => {
              setShow(false)
              navigation.navigate('app')
            }, 1000);
            }} >
               <View style={styles.content}>
               <View>
                <Image source={require('./image/logo6.png')}
                  style={{width:60,
                    height:50,
                    marginTop:20,
                    marginRight:5,
                    borderRadius:10
                  }}/>
                </View>
            <View>
            <Text style={{
                fontSize:32,
                color:'#ffffff',
                fontWeight:'bold',
                marginTop:30
            }}>
                Muvi
            </Text>
            </View>
         </View>
        </Pressable>
        <ActivityIndicator  size= "large"  color={'white'}  animating={show}/>
      </View>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        justifyContent:'center',
        backgroundColor: '#373737',
        width:width,
        height:height
    },
    content:{
        flexDirection:'row',
        justifyContent:'center',
        margin:7
    }
})