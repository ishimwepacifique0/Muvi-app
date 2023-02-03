import { View, Text,StyleSheet,Image,StatusBar, Dimensions, Pressable } from 'react-native'
import React from 'react'
import { Octicons,Feather,MaterialIcons,AntDesign } from '@expo/vector-icons';

const height = Dimensions.get('screen').height;

const Profile = () => {
  return (
    <View style={StyleSheet.container}>
      <View style={{
        backgroundColor:'#012',
        paddingVertical:40,
      }}>
        <Image source={{
          uri:'https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg'
        }} 
        style={{
          width:100,
          height:100,
          borderRadius:100,
          marginLeft:125,

        }}
        />
        <View>
            <Text style={{color:'white',fontWeight:'bold',alignSelf:'center'}}>Paccy Dev</Text>
            <Text style={{color:'white',fontWeight:'bold',alignSelf:'center'}}>paccydev@gmail.com</Text>
            <Text style={{color:'#e5a50a',fontWeight:'bold',alignSelf:'center'}}>Edit Profile</Text>
        </View>
      </View>
      <View style={styles.containerprofile}>
          <View style={styles.label}>
          <Octicons name="inbox" size={20} color="white" />
          <View>
            <Text style={{color:'white',marginLeft:10,fontSize:18}}>
              Inbox
            </Text>
          </View>
          </View>
          <View style={styles.label}>
          <Feather name="user" size={20} color="white" />
          <View>
            <Text style={{color:'white',marginLeft:10,fontSize:18}}>
              Account setting
            </Text>
          </View>
          </View>
          <View style={styles.label}>
          <MaterialIcons name="language" size={24} color="white" />
          <View>
            <Text style={{color:'white',marginLeft:10,fontSize:18}}>
              Language
            </Text>
          </View>
          </View>
          <View style={styles.label}>
          <AntDesign name="infocirlceo" size={24} color="white" />
          <View>
            <Text style={{color:'white',marginLeft:10,fontSize:18}}>
              Help,FAQ
            </Text>
          </View>
          </View>
          <View style={{ marginHorizontal:20}}>
            <Text style={{color:'grey'}}>Term & condition</Text>
            <Text style={{color:'grey'}}>Privacy & policy</Text>
            </View>
            <Pressable style={{ borderWidth:1,padding:7,borderColor:'grey',borderRadius:7,marginVertical:30}}>
              <Text style={{color:'red',textAlign:'center'}}>
                Logout
              </Text>
            </Pressable>
      </View>
      
      <StatusBar style={{backgroundColor:'#0F1417'}}/>
    </View>
    
  )
}

export default Profile;


const styles = StyleSheet.create({
  container:{
    backgroundColor:'#0F1417',
    height:height,

},
containerprofile:{
  backgroundColor:'#2B2D30',
  height:height,
  borderTopLeftRadius:20,
  borderTopRightRadius:20,
  marginTop:-20
},
label:{
  flexDirection:'row',
  marginLeft:20,
  marginVertical:16

}
})

