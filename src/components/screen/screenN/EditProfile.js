import { View, Text, StyleSheet, Image, StatusBar, Dimensions, Pressable,TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { UserEdit } from '../../../features/authSlice';
import FlashMessage,{showMessage} from 'react-native-flash-message'; 


const height = Dimensions.get('screen').height;
const EditProfile = ({route}) => {

    const Dispatch = useDispatch()
    
    const [getEditdata, setGetEditdata] = React.useState('')
    const [username,setUsername] = React.useState('')
    const [email,setEmail] = React.useState('')
    const [password,setPassword] = React.useState('')

    React.useEffect(()=>{
        setGetEditdata(route.params)
    },[])

    const Editdata = () => {
        const data = {
            _id :getEditdata._id,
            email:email,
            password:password,
            username:username,  
        }
        if( data.email == ''&& data.username == '' && data.password == ''){
          return(
            showMessage(
              {
                message:"Error",
                description:"all fields are required",
                type:"danger"
              }
            )
          )
        }else if( data.email ==""){
          return(
            showMessage(
              {
                message:"Error",
                description:"Email field are required",
                type:"warning"
              }
            )
          )
        }else if(data.username == ''){
          return(
            showMessage(
              {
                message:"Error",
                description:"Username field are required",
                type:"warning"
              }
            )
          )
        }else if(data.password == ''){
          showMessage(
            {
              message:"Error",
              description:"Password field are required",
              type:"warning"
            }
          )
        }
        console.log(data)
        Dispatch(UserEdit(data))
    }

  return (
    <SafeAreaView style={{ backgroundColor: '#0F1417' }}>
      <FlashMessage />
    <View style={StyleSheet.container}>
        <ScrollView>
      <View style={{
        backgroundColor: '#012',
        paddingVertical: 40,
      }}>
        <Image source={{
          uri: 'https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg'
        }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 100,
            marginLeft: 125,

          }}
        />
        <View>
          <Text style={{ color: 'white', fontWeight: 'bold', alignSelf: 'center' }}>{getEditdata.username}</Text>
          <Text style={{ color: 'white', fontWeight: 'bold', alignSelf: 'center' }}>{getEditdata.email}</Text>

        </View>
      </View>
      <View style={styles.containerprofile}>

      <Text style={{ color: '#e5a50a', fontWeight: 'bold', alignSelf: 'center',paddingBottom:20 }}
          >Edit Profile</Text>
        
          <View>
            <TextInput
            mode="outline"
            right={<TextInput.Icon  name="username"/>}
            label="Username"
            activeUnderlineColor='#e5a50a'
            underlineColor='#26282C'
            style={styles.input}

            onChangeText={(username)=>{setUsername(username)}}
            />
        </View>
        <View>
            <TextInput
            mode="outline"
            right={<TextInput.Icon  name="username"/>}
            label="Email"
            activeUnderlineColor='#e5a50a'
            underlineColor='#26282C'
            style={styles.input}
            onChangeText={(email)=>{setEmail(email)}}
            />
        </View>
        <View>
            <TextInput
            mode="outline"
            right={<TextInput.Icon  name="username"/>}
            label="Password"
            activeUnderlineColor='#e5a50a'
            underlineColor='#26282C'
            style={styles.input}
            onChangeText={(password)=>{setPassword(password)}}
            />
        </View>

        <TouchableOpacity>
              <Pressable style={styles.button} onPress={Editdata}>
                <Text style={{ color:'#000000',fontSize:14,fontWeight:'bold',textAlign:'center'}}>
                    Edit data
                </Text>
              </Pressable>
              </TouchableOpacity>
      </View>
    </ScrollView>
      <StatusBar style={{ backgroundColor: '#0F1417' }} />
    </View>
    </SafeAreaView>

  )
}

export default EditProfile;


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0F1417',
    height: height,

  },
  containerprofile: {
    backgroundColor: '#2B2D30',
    height: 370,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    paddingTop:30
  },
  label: {
    flexDirection: 'row',
    marginLeft: 20,
    marginVertical: 16

  },
  input:{
    backgroundColor:'#26282C',
     color:'#ffffff',
     borderWidth:0.5,
     marginLeft:10,
     marginRight:8,
     marginTop:3,
     marginBottom:5
   },
   button:{
    backgroundColor:'#e5a50a',
    padding:8,
    margin:10,
    borderRadius:8,
},
})

