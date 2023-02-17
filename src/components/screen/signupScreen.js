import { 
    View,
    Image,
    Text,
    StyleSheet,
    Dimensions,
    Pressable,
    TouchableOpacity

} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native-paper';
import { Ionicons,FontAwesome,AntDesign } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { signup } from '../../features/authSlice';
import React from 'react';
import FlashMessage,{showMessage } from 'react-native-flash-message';
import { useSelector } from 'react-redux';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function SignupScreen({navigation}){

    const dispatch = useDispatch()
    const [username,setUsername] = React.useState('')
    const [password,setPassword] = React.useState('')
    const [email,setEmail] = React.useState('')
    const [animation,setAnimation] = React.useState(false)

    const flashmsg = React.useRef()


    console.log("hello")

    const dataRegister = () =>{
        const data = {
            username:username,
            email:email,
            password:password
        }
        if(data.username == "" && data.email == "" && data.password == ""){
            return(
                flashmsg.current.showMessage({
                    message: "Empty field",
                    description: "All field are required",
                    type: "danger",
                  })
            )
        }else if(data.username == ""){
            return(
                flashmsg.current.showMessage({
                    message: "Empty username",
                    description: "Username are required",
                    type: "warning",
                  })
            )
        }else if(data.email == ""){
            return(
                flashmsg.current.showMessage({
                    message: "Empty email",
                    description: "Email are required",
                    type: "warning",
                  })
            )
        }else if(data.password == ""){
            return(
                flashmsg.current.showMessage({
                    message: "Empty password",
                    description: "Password are required",
                    type: "warning",
                  })
            )
        }

        console.log(data)
        dispatch(signup(data))

    }


    const highlight = string =>
    string.split(' ').map((word, i) => (
      <Text key={i}>
        <Text style={styles.highlighted}>{word} </Text>
      </Text>
    ));


    return(
        <SafeAreaView>
            <View style={[styles.container,{height:height,width:width}]}>
            <View style={styles.content}>
                <View>
                <Image source={require('./image/logo6.png')}
                  style={{width:40,
                    height:30,
                    marginTop:10,
                    marginRight:5,
                    borderRadius:6
                  }}/>
                </View>
            <View>
            <Text style={{
                fontSize:28,
                color:'#ffffff',
                fontWeight:'bold',
                marginTop:7
            }}>
                Muvi
            </Text>
            </View>
         </View>
         <View style={{marginBottom:10}}>
            <Text
            style={{ 
                fontSize:15,
                color:'#ffffff',
                margin:5,
            }}
            >
                Sign upn  to discover all our  and enjoy our feature
            </Text>
            <Text style={{ color:'#ffffff',textAlign:'center'}}>
                or simple sign up with
            </Text>
         </View>
         <View>
            <TextInput 
            mode="outline"
            right={<TextInput.Icon  name="username"/>}
            label="Enter username or phonenumber"
            activeUnderlineColor='#e5a50a'
            underlineColor='#26282C'
            style={[styles.input]}
            onChangeText={(username)=>{setUsername(username)}}
            />        
              </View>
         <View>
            <TextInput 
            mode="outline"
            right={<TextInput.Icon  name="email"/>}
            label="Enter email or phonenumber"
            activeUnderlineColor='#e5a50a'
            underlineColor='#26282C'
            style={[styles.input]}
            onChangeText={(email)=>{setEmail(email)}}
            />        
              </View>
              <View>
            <TextInput 
            mode="outline"
            right={<TextInput.Icon  name="lock"  color={'yellow'}/>}
            label="Password"
            activeUnderlineColor='#e5a50a'
            underlineColor='#26282C'
            style={[styles.input]}
            onChangeText={(password)=>{setPassword(password)}}
            
            />      
              </View>
              <TouchableOpacity>
              <Pressable style={styles.button} onPress={dataRegister}>
                <Text style={{ color:'#000000',fontSize:14,fontWeight:'bold',textAlign:'center'}}>
                    Sign up
                </Text>
              </Pressable>
              </TouchableOpacity>
              
              <Text style={{ color:'#ffffff',textAlign:'center'}}>
                By signing up i accept {highlight('term of use')} and {highlight('privacy policy')}
            </Text>
            <Text style={{ color:'#ffffff',textAlign:'center',marginTop:10}}>
                or simple sign up with
            </Text>
                <View>
                    <Pressable style={styles.button1}>
                    <AntDesign name="apple-o" size={20} color="white"  backgroundColor='white' />
                        < Text style={{color:'#ffffff',margin:4,fontSize:14,fontWeight:'bold',textAlign:'center'}}>Sign up with apple</Text>
                    </Pressable>
                    <Pressable style={styles.button2}>
                    <AntDesign name="google" size={20} color="green" />
                        < Text style={{ color:'#000000',margin:4,fontSize:14,fontWeight:'bold',textAlign:'center'}}>Sign up with Gmail</Text>
                    </Pressable>
                </View>
                <Text style={{ color:'#ffffff',textAlign:'center',marginTop:8,marginBottom:10}} onPress={()=>{
                    navigation.navigate('login')
                }}>
                Already i have account? { highlight('Sign in')}
            </Text>
                <FlashMessage ref={flashmsg} />
            </View>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#26282C',
        padding:6

    },
    highlighted: {
        color:'#e5a50a'
      },
      content:{
        flexDirection:'row',
        justifyContent:'center'
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
    button1:{

        flexDirection:'row',
        justifyContent:'center',
        backgroundColor:'black',
        padding:7,
        margin:7,
        borderRadius:8,

    },
    button2:{
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor:'white',
        padding:7,
        margin:7,
        borderRadius:8,
    },
    content:{
        flexDirection:'row',
        margin:7
    }
})