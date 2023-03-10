import { 
    View,
    Image,
    Text,
    StyleSheet,
    Dimensions,
    Pressable,
    TouchableOpacity,
    ActivityIndicator

} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../../features/authSlice';
import FlashMessage,{showMessage } from 'react-native-flash-message';
import { useSelector } from 'react-redux';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function SigninScreen({navigation}){

  const displayError = useSelector((state)=> state.authactor.error)
  const displaySuccess = useSelector((state)=>state.authactor.isLoggedin)

    const Dispatch = useDispatch()
    const [email,setEmail] = React.useState('')
    const [password,setPassword] = React.useState('')
    const [animation,setAnimation] = React.useState(false)


     console.log(displayError)
    const getCredential = () =>{
        
        const data = {
            email:email,
            password:password
        }
        if(data.email == "" && data.password == ""){
            return(
                showMessage({
                    message: "Empty field",
                    description: "All field are required",
                    type: "danger",
                  })
                      
            )
        }else if(data.email == ""){
            return(
                showMessage({
                    message: "Empty email",
                    description: "Email are required",
                    type: "warning",
                  })  
            )
        }else if(data.password == ""){
            return(
                showMessage({
                    message: "Empty password",
                    description: "Password are required",
                    type: "warning",
                  })
            )}
        else if(displayError){
            showMessage({
                message:'Error',
                description:displayError,
                type:'danger'
        
            })}
        console.log(data)
        Dispatch(signIn(data))
         
    }




    const highlight = string =>
    string.split(' ').map((word, i) => (
      <Text key={i}>
        <Text style={styles.highlighted}>{word} </Text>
      </Text>
    ));


    return(
        <SafeAreaView>
            <FlashMessage />
            <View style={[styles.container,{height:height,width:width}]}>
            <View style={styles.content}>
                <View>
                <Image source={require('./image/logo6.png')}
                  style={{width:40,
                    height:30,
                    marginTop:20,
                    marginRight:5,
                    borderRadius:6
                  }}/>
                </View>
            <View>
            <Text style={{
                fontSize:28,
                color:'#ffffff',
                fontWeight:'bold',
                marginTop:17
            }}>
                Muvi
            </Text>
            </View>
         </View>
         <View>
            <Text
            style={{ 
                fontSize:16,
                color:'#ffffff',
                margin:5,
                textAlign:'center'
            }}
            >
                Please login to enjoy benefit movie and we
            </Text>
            <Text style={{ color:'#ffffff',textAlign:'center',marginBottom:20}}>
                won't let you go
            </Text>
         </View>
         
         <View>
            <TextInput 
            mode="outline"
            right={<TextInput.Icon  name="email"/>}
            label="Enter email or phonenumber"
            activeUnderlineColor='#e5a50a'
            underlineColor='#26282C'
            style={styles.input}
            onChangeText = {(email) =>{setEmail(email)}}
            />        
              </View>
              <View>
            <TextInput 
            mode="outline"
            right={<TextInput.Icon  name="lock"  color={'yellow'}/>}
            label="Password"
            activeUnderlineColor='#e5a50a'
            underlineColor='#26282C'
            style={styles.input}
            onChangeText = {(password)=>{setPassword(password)}}
            secureTextEntry={true}
            />      
              </View>
              {displaySuccess?(<ActivityIndicator size={'large'}  />):null}
              <Text style={{alignSelf:'flex-end'}}>
                {highlight('Forget Password')}
              </Text>
              <TouchableOpacity>
              <Pressable style={styles.button} onPress={getCredential} >
                <Text style={{padding:8, color:'#000000',fontSize:14,fontWeight:'bold',textAlign:'center'}}>
                    Login
                </Text>
              </Pressable>
              </TouchableOpacity>
              
            <Text style={{ color:'#ffffff',textAlign:'center',marginTop:10,marginBottom:10}}>
                or simple sign in with
            </Text>
                <View>
                    <Pressable style={styles.button1}>
                    <AntDesign name="apple-o" size={20} color="white"  backgroundColor='white' />
                        < Text style={{color:'#ffffff',margin:4,fontSize:14,fontWeight:'bold',textAlign:'center'}}>Sign in with apple</Text>
                    </Pressable>
                    <Pressable style={styles.button2}>
                    <AntDesign name="google" size={20} color="green" />
                        < Text style={{ color:'#000000',margin:4,fontSize:14,fontWeight:'bold',textAlign:'center'}}>Sign in with Gmail</Text>
                    </Pressable>
                </View>
                <Text style={{ color:'#ffffff',textAlign:'center',alignItems:'flex-end',marginTop:16}} onPress={()=>{navigation.navigate('signup')}}>
                I don't have account? { highlight('Sign up')}
            </Text>

            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#26282C',
        height:height,
        padding:6

    },
    content:{
        flexDirection:'row'
    },
    highlighted: {
        color:'#e5a50a',
        fontWeight:'bold'

      },
    content:{
        flexDirection:'row',
        justifyContent:'center',
        margin:7
    },
    input:{
     backgroundColor:'#26282C',
      borderColor:'white',
      color:'#ffffff',
      borderWidth:0.5,
      marginLeft:10,
      marginRight:8,
      marginTop:3,
      marginBottom:10
    },
    button:{
        backgroundColor:'#e5a50a',
        padding:7,
        margin:10,
        marginTop:20,
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
    }
})